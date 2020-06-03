export const sortAscByField = (field, a, b) => {
  if (field && a[field] > b[field]) return 1;
  if (field && b[field] > a[field]) return -1;

  return 0;
};

export const sortDescByField = (field, a, b) => {
  if (field && a[field] > b[field]) return -1;
  if (field && b[field] > a[field]) return 1;

  return 0;
};
