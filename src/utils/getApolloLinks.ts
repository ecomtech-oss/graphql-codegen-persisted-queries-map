import { ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries';
import { print } from 'graphql';

type GetApolloLinksType = (operationToHashMap: Record<string, string>) => ApolloLink[];

export const getApolloLinks: GetApolloLinksType = (operationToHashMap) => [
  createPersistedQueryLink({
    generateHash: (document) => {
      const documentWithoutFragments = {
        ...document,
        definitions: document.definitions.filter(({ kind }) => kind === 'OperationDefinition'),
      };

      const operationString = print(documentWithoutFragments);
      const hash = operationToHashMap[operationString];

      if (!hash) {
        console.error('Не найден хеш для запроса: ', operationString);
        console.error('Существующие хеши: ', operationToHashMap);
      }

      return hash;
    },
  }),

  setContext(async (request, prevContext) => ({
    ...prevContext,
    headers: {
      ...prevContext?.headers,
      'operation-hash': request?.extensions?.persistedQuery?.sha256Hash || '',
    },
  })),
];
