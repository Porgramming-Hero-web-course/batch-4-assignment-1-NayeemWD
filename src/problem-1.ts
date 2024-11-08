const numbers: number[] = [1, 2, 3, 4, 5];

const sumArray = (array: number[]): number => {
  let sum: number = 0;
  array.forEach((element: number) => {
    sum += element;
  });
  return sum;
};
console.log(sumArray(numbers));
