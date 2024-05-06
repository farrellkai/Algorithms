// sum numbers recursive function
const sumNumbers = (numbers) => {
  //base case: if array is empty return 0
  if (!numbers.length) return 0;
  //recursive case: reutrn sum of last element plus invoked function with mutated array as argument
  return numbers.pop() + sumNumbers(numbers);
};
