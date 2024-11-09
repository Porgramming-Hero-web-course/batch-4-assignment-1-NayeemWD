{
  //
  const numbers: number[] = [1, 2, 2, 3, 4, 4, 5];

  function removeDuplicates(array: number[]): number[] {
    return [...new Set(array)];
  }

  console.log(removeDuplicates(numbers));
  
  //
}
