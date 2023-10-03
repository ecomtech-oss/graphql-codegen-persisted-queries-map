type GetAllChildrenType = (childrenName: string, childrenMap: Record<string, string[]>) => string[];

export const getAllChildren: GetAllChildrenType = (childrenName, childrenMap) => {
  const children = childrenMap[childrenName];
  const resultSet = new Set<string>([childrenName]);

  if (!children || !children.length) {
    return Array.from(resultSet);
  }

  children.forEach((name) => {
    getAllChildren(name, childrenMap).forEach((item) => resultSet.add(item));
  });

  return Array.from(resultSet);
};
