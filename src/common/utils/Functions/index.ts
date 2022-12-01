export const randomItemInArray = (array: any) => {
  const index = Math.floor(Math.random() * array.length);
  return index;
};
