// sum numbers recursive function
const sumNumbers = (numbers) => {
  //base case: if array is empty return 0
  if (!numbers.length) return 0;
  //recursive case: reutrn sum of last element plus invoked function with mutated array as argument
  return numbers.pop() + sumNumbers(numbers);
};

//test cases
console.log(sumNumbers([5, 2, 9, 10]));
console.log(sumNumbers([1, -1, 1, -1, 1, -1, 1]));
console.log(sumNumbers([]));
console.log(sumNumbers([1000, 0, 0, 0, 0, 0, 1]));
console.log(sumNumbers([700, 70, 7]));
console.log(sumNumbers([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]));
console.log(
  sumNumbers([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
);
console.log(
  sumNumbers([123456789, 12345678, 1234567, 123456, 12345, 1234, 123, 12, 1, 0])
);

//factorial function
const factorial = (n) => {
  //if n is 0
};
