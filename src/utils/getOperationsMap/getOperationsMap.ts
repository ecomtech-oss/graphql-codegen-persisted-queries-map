import { addTypenameToDocument } from '@apollo/client/utilities';
import { Types } from '@graphql-codegen/plugin-helpers';
import { FragmentDefinitionNode, OperationDefinitionNode, print } from 'graphql';

import { findFragments } from '../findFragments';
import { getAllChildren } from '../getAllChildren/getAllChildren';

type GetOperationsMapType = (props: { documents: Types.DocumentFile[] }) => {
  hashToOperationsMap: Record<string, string>
  operationsToHashMap: Record<string, string>
};

export const getOperationsMap: GetOperationsMapType = ({ documents }) => {
  const fragmentDefinitionMap: Record<string, FragmentDefinitionNode> = {};
  const operationDefinitions: OperationDefinitionNode[] = [];

  // eslint-disable-next-line no-eval
  const { createHash } = eval('require')('crypto');

  documents.forEach(({ document }) => {
    if (!document) {
      return;
    }

    const { definitions } = document;

    definitions.forEach((definition) => {
      switch (definition.kind) {
        case 'OperationDefinition':
          operationDefinitions.push(definition);

          break;
        case 'FragmentDefinition':
          fragmentDefinitionMap[definition.name.value] = definition;

          break;
        default:
          console.warn('Не поддерживаемый тип в graphQl: ', definition.kind);
      }
    });
  });

  const fragmentsChildrenMap = Object.keys(fragmentDefinitionMap)
    .reduce<Record<string, string[]>>(
    (acc, fragmentName) => {
      acc[fragmentName] = findFragments(fragmentDefinitionMap[fragmentName]?.selectionSet);

      return acc;
    },
    {},
  );

  const fragmentsAllChildrenMap = Object.keys(fragmentDefinitionMap)
    .reduce<Record<string, string[]>>(
    (acc, fragmentName) => {
      acc[fragmentName] = getAllChildren(fragmentName, fragmentsChildrenMap);

      return acc;
    },
    {},
  );

  const hashToOperationsMap: Record<string, string> = {};
  const operationsToHashMap: Record<string, string> = {};

  operationDefinitions.forEach((definition) => {
    const firstLevelFragments = findFragments(definition.selectionSet);
    const fragments: string[] = [];

    firstLevelFragments.forEach((firstLevelFragmentName) => {
      fragmentsAllChildrenMap[firstLevelFragmentName].forEach((fragmentName) => {
        if (!fragments.includes(fragmentName)) {
          fragments.push(fragmentName);
        }
      });
    });

    const operationWithFragments = print(
      addTypenameToDocument({
        kind: 'Document',
        definitions: [
          definition,
          ...fragments.map((fragmentName) => fragmentDefinitionMap[fragmentName]),
        ],
      }),
    );
    const operation = print(addTypenameToDocument({ kind: 'Document', definitions: [definition] }));
    const key = createHash('sha256').update(operationWithFragments).digest('hex');

    hashToOperationsMap[key] = operationWithFragments;
    operationsToHashMap[operation] = key;
  });

  return {
    hashToOperationsMap,
    operationsToHashMap,
  };
};
