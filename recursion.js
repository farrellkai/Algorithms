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
  //base case: if n is 0 return 1
  if (!n) return 1;
  //recursive case: return factorial with n minus 1 as argument multiplied by n
  return n * factorial(--n);
};

//test cases
console.log(factorial(3));
console.log(factorial(6));
console.log(factorial(18));
console.log(factorial(1));
console.log(factorial(13));
console.log(factorial(0));

//sum of lengths function
const sumOfLengths = (arr, sum = 0) => {
  //base case: if arr is empty return sum
  if (!arr.length) return sum;
};
