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
      let num = +str.slice(left, right);
      while (num > 0) {
        output += str[right];
        num--;
      }
      right++;
      left = right;
    } else right++;
  }
  return output;
};

// Write a function, compress, that takes in a string as an argument.
// The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character.
// Single character occurrences should not be changed.
// You can assume that the input only contains alphabetic characters.
const compress = (str) => {
  let output = '';

  let left = 0;
  let right = 0;
  while (right <= str.length) {
    if (str[left] !== str[right]) {
      let num = right - left;
      num > 1 ? (output += num + str[left]) : (output += str[left]);
      left = right;
    } else right++;
  }
  return output;
};

// Write a function, fiveSort, that takes in an array of numbers as an argument.
// The function should rearrange elements of the array such that all 5s appear at the end.
// Your function should perform this operation in-place by mutating the original array. The function should return the array.
// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.
const fiveSort = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[right] === 5) right--;
    else {
      if (arr[left] === 5) {
        arr[left] = arr[right];
        arr[right] = 5;
      }
      left++;
    }
  }
  return arr;
};
