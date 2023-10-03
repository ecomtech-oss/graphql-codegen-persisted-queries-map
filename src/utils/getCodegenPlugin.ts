import { CodegenPlugin } from '@graphql-codegen/plugin-helpers';
import { getOperationsMap } from './getOperationsMap/getOperationsMap';

type ConfigType = {
  persistedQueriesMap?: {
    dryRun?: boolean
    operationsMapPath?: string
  }
};

const codegenPlugin: CodegenPlugin<ConfigType> = {
  plugin: (schema, documents, config) => {
    const pluginOptions = config.persistedQueriesMap || {};
    const { dryRun = false, operationsMapPath = 'public/operationsMap.json' } = pluginOptions;

    const { hashToOperationsMap, operationsToHashMap } = getOperationsMap({ documents });

    if (dryRun) {
      return 'export {}\n';
    }
    // eslint-disable-next-line no-eval
    const { writeFileSync } = eval('require')('fs');

    writeFileSync(operationsMapPath, JSON.stringify(hashToOperationsMap));

    return `export const operationsToHashMap = ${JSON.stringify(operationsToHashMap)}`;
  },
};

export const { plugin } = codegenPlugin;
