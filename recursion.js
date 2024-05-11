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
  //add to sum value of last element length in arr and remove
  sum += arr.pop().length;
  //recursive case: call same fuction with modified arguments
  return sumOfLengths(arr, sum);
};

//test cases
console.log(sumOfLengths(['goat', 'cat', 'purple']));
console.log(sumOfLengths(['bike', 'at', 'pencils', 'phone']));
console.log(sumOfLengths([]));
console.log(sumOfLengths(['', ' ', '  ', '   ', '    ', '     ']));
console.log(sumOfLengths(['0', '313', '1234567890']));

//reverse string function
const reverseString = (string) => {
  //base case: if string is empty return empty string
  if (string === '') return string;
  //recursive case: call function removing first character as string and concatenate that char to result
  return reverseString(string.slice(1)) + string[0];
};

//test cases
console.log(reverseString('hello'));
console.log(reverseString('abcdefg'));
console.log(reverseString('stopwatch'));
console.log(reverseString(''));
console.log(reverseString('racecar'));

//palindrome function
const palindrome = (string) => {
  //base case: if first and last characters do not match return false
  if (string[0] !== string[string.length - 1]) return false;
  //base case: if string has 1 or fewer characters return true
  if (string.length <= 1) return true;
  //recursive case: return function with string as argument without first and last characters
  return palindrome(string.slice(1, string.length - 1));
};

//test cases
console.log(palindrome('pop'));
console.log(palindrome('kayak'));
console.log(palindrome('pops'));
console.log(palindrome('boot'));
console.log(palindrome('rotator'));
console.log(palindrome('abcbca'));
console.log(palindrome(''));

//fib function
const fib = (num) => {
  //edge case: if number is less that 0 throw error
  if (num < 0) throw new Error('please input positive integer');
  //base case: if number is 0 return 0
  if (num === 0) return 0;
  //base case: if number is 1 return 1
  if (num === 1) return 1;
};
