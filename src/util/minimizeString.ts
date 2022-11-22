export const minimizeString = (originString: string, maxLength: number) => {
  return maxLength > originString.length
    ? originString
    : originString.substring(0, maxLength) + '...';
};
