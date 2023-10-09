# Apollo Persisted Queries plugin

[English](./README.md) | **Русский**

### Описание

Это плагин для библиотеки [graphql-codegen](https://the-guild.dev/graphql/codegen), который:

- генерирует хэш-таблицу для пар «sha256 хэш операции - операция» на основе всех GraphQL операций, найденных в
  приложении
- создаёт в указанной директории JSON-файл со сгенерированной ранее хэш-таблицей
- предоставляет функцию `getApolloLinks`, которая создает массив со
  следующими [Apollo Link](https://www.apollographql.com/docs/react/api/link/introduction):
  - обертка над [createPersistedQueryLink](https://www.apollographql.com/docs/react/api/link/persisted-queries/),
    которая использует созданную хэш-таблицу для преобразования операции в хэш
  - link, который добавляет в запросы заголовок "Operation-Hash" с хэшом операций

### Мотивация

Иногда перед нами встает задача контролировать и ограничивать GraphQL операций в продакшн среде.
Это, как минимум, может быть необходимо с точки зрения безопасности, чтобы никакая потенциально опасная операция не
могла повлиять на работоспособность нашего GraphQL сервера.

Но как это сделать учитывая особенностей работы языка запросов GraphQL?

Тут нам на помощь приходит
функционал [Automatic Persisted Queries](https://www.apollographql.com/docs/apollo-server/performance/apq/) от Apollo,
который позволяет уменьшить нагрузку на сеть за счет отправки хэшей вместо описания самих операций.

Взяв этот функционал за основу и немного доработав его мы можем реализовать следующую схему:

#### Схема работы

1. Клиентское приложение и GraphQL сервер конфигурируются на запуск в режиме "Persisted Queries". Клиентское приложение
   среди прочих статических файлов содержит сгенерированный плагином JSON-файл с объектом вида «sha256 хэш операции -
   операция».
2. В процессе деплоя клиентского приложения доступными инструментами CD на GraphQL сервере обновляется список
   разрешенных хэшей и соответствующих им операции (берутся из сгенерированного JSON-файла).
3. Клиентское приложение дополнительно присылает в GraphQL-запросах заголовок "Operation-Hash", в котором содержится хэш
   текущей операции.
4. GraphQL сервер игнорирует строку с описанием операции в теле запроса и смотрит только на заголовок "Operation-Hash",
   он извлекает хэш операции из заголовка и проверяет, присутствует ли этот хэш в разрешенном списке.
   Если хэш в этом списке присутствует, то сервер выполняет соответствующую этому хэшу операцию, применяя к ней
   переданные в теле запроса variables.
   В противном случае сервер возвращает ошибку, но отличную от PERSISTED_QUERY_NOT_FOUND, чтобы Apollo Client не
   выполнял повторный запрос.

### Установка

Установите плагин через npm:

```
npm i -S @samokat/apollo-persisted-queries-map
```

### Пример использования

`codegen.js`

```javascript
module.exports = {
  // ...
  generates: {
    // ...
    ['./src/__generated__/operationsMap.ts']: {
      documents: ['./src/**/!(__generated__)/*.gql.ts'],
      plugins: [
        '@samokat/apollo-persisted-queries-map'
      ],
      config: {
        persistedQueriesMap: {
          // Если true, то плагин проверяет все условия для своей работы, но не генерирует данные
          dryRun: true,
          // Путь, куда генерировать json для сервера
          operationsMapPath: 'public/operationsMap.json'
        }
      }
    },
  },
}
```

`App.tsx`

```tsx
import { getApolloLinks } from '@samokat/apollo-persisted-queries-map'
import { ApolloProvider, ApolloClient, from } from '@apollo/client'
import { VFC } from 'react'

import { operationsToHashMap } from 'src/__generated__/operationsMap'

const client = new ApolloClient({
  link: from([...getApolloLinks(operationsToHashMap)])
})

export const App: VFC = () => (
  <ApolloProvider client={client}>
    {/*...*/}
  </ApolloProvider>
)
```
