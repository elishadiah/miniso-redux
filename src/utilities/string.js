export const stringCapitalize = (string) => {
  const data = string
    ?.toLowerCase()
    ?.split(' ')
    ?.map((i) => {
      const itemArray = i.split('');
      itemArray[0] = itemArray[0].toUpperCase();
      return itemArray.join('');
    })
    .join(' ');

  return data || '';
};
