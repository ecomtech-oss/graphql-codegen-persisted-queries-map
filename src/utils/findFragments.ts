import { SelectionSetNode } from 'graphql';

type FindFragmentsType = (selectionSet?: SelectionSetNode) => string[];

export const findFragments: FindFragmentsType = (selectionSet) => {
  if (!selectionSet) {
    return [];
  }

  return selectionSet.selections.reduce<string[]>((acc, selection) => {
    if (selection.kind === 'FragmentSpread') {
      return [...acc, selection.name.value];
    }

    return [...acc, ...findFragments(selection.selectionSet)];
  }, []);
};
