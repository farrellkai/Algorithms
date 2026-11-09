// Write a function, isPalindrome, that takes in a string.
// It should return a boolean indicating whether or not the string is the same forwards and backwards.
const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};

// Write a function, uncompress, that takes in a string as an argument.
// The input string will be formatted into multiple groups according to the following pattern: <number><char>
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively.
// You may assume that the input string is well-formed according to the previously mentioned pattern.
const uncompress = (str) => {
  let output = '';
  let left = 0;
  let right = 0;
  while (right < str.length) {
    if (/^[a-zA-Z]$/.test(str[right])) {
      const num = +str.slice(left, right);
      while (num > 0) {}
    }
  }
};
