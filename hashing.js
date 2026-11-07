// Write a function, anagrams, that takes in two strings as arguments.
// The function should return a boolean indicating whether or not the strings are anagrams.
// Anagrams are strings that contain the same characters, but in any order.
const anagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const map = new Map();

  let i = 0;

  while (i < str1.length) {
    if (!map.has(str1[i])) map.set(str1[i], 1);
    else map.set(str1[i], map.get(str1[i]) + 1);
    i++;
  }

  i = 0;
  while (i < str2.length) {
    if (!map.has(str2[i])) return false;
    if (map.get(str2[i]) > 1) map.set(str2[i], map.get(str2[i]) - 1);
    else map.delete(str2[i]);
    i++;
  }
  return true;
};

// Write a function, mostFrequentChar, that takes in a string as an argument.
// The function should return the most frequent character of the string.
// If there are ties, return the character that appears earlier in the string.
// You can assume that the input string is non-empty.
const mostFrequentChar = (str) => {
  const map = new Map();
  let most = 0;

  let i = 0;
  while (i < str.length) {
    if (!map.has(str[i])) map.set(str[i], 1);
    else map.set(str[i], map.get(str[i]) + 1);
    if (map.get(str[i]) > most) most = map.get(str[i]);
    i++;
  }
  for (let [key, value] of map) {
    if (value === most) return key;
  }
};

// Write a function, pairSum, that takes in an array and a target sum as arguments.
// The function should return an array containing a pair of indices whose elements sum to the given target.
// The indices returned must be unique.
// Be sure to return the indices, not the elements themselves.
// There is guaranteed to be one such pair that sums to the target.
const pairSum = (arr, target) => {
  const map = new Map();

  let i = 0;
  while (i < arr.length) {
    map.set(arr[i], i);
    i++;
  }
};
