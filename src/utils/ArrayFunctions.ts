export const deepCopyArray = (arr: Array<Array<string>>) =>
  arr.map((innerArr) => innerArr.slice());

export const buildSquareArray = (size: number, value: string | number) =>
  Array(size).fill(Array(size).fill(value));
