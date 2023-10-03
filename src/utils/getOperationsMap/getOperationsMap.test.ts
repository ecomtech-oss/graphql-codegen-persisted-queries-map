import { Types } from '@graphql-codegen/plugin-helpers';

import { project1Documents } from '../../testData/project1Documents';
import { project1HashToOperationsMap, project1OperationsToHashMap } from '../../testData/project1Output';
import { project2Documents } from '../../testData/project2Documents';
import {
  project2OperationToHashMap,
  project2HashToOperationsMap,
} from '../../testData/project2Output';
import { getOperationsMap } from './getOperationsMap';

describe('getOperationsMap', () => {
  test('must process the document 1 correctly', async () => {
    // @ts-ignore
    const documents = project1Documents as Types.DocumentFile[];
    const { operationsToHashMap, hashToOperationsMap } = getOperationsMap({ documents });

    expect(operationsToHashMap).toEqual(project1OperationsToHashMap);
    expect(hashToOperationsMap).toEqual(project1HashToOperationsMap);
  });
  test('must process the document 2 correctly', async () => {
    // @ts-ignore
    const documents = project2Documents as Types.DocumentFile[];
    const { operationsToHashMap, hashToOperationsMap } = getOperationsMap({ documents });

    expect(operationsToHashMap).toEqual(project2OperationToHashMap);
    expect(hashToOperationsMap).toEqual(project2HashToOperationsMap);
  });
});
