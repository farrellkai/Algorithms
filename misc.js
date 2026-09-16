// Return the second-largest distinct number in an array.
//  Return null if there isn’t one.

const secondLargest = (arr) => {
  let largest = -Infinity;
  let output = -Infinity;

  let i = 0;
  while (i < arr.length) {
    if (arr[i] > largest) {
      output = largest;
      largest = arr[i];
    }
    if (arr[i] > output && arr[i] < largest) {
      output = arr[i];
    }
    i++;
  }
  return output === -Infinity ? null : output;
};

// Return the first character that appears exactly once in a string.
// Return null if none exists.

const firstUniqueChar = (string) => {
  const map1 = new Map();

  let i = 0;
  while (i < string.length) {
    map1.has(string[i])
      ? map1.set(string[i], map1.get(string[i]) + 1)
      : map1.set(string[i], 1);
    i++;
  }
  console.log(map1);
  i = 0;
  while (i < string.length) {
    if (map1.get(string[i]) === 1) return string[i];
    i++;
  }
  return null;
};

// Return an array with duplicate values removed, preserving their original order.
const removeDuplicates = (arr) => {
  const set = new Set();
  const output = [];

  let i = 0;
  while (i < arr.length) {
    if (!set.has(arr[i])) {
      set.add(arr[i]);
      output.push(arr[i]);
    }
    i++;
  }
  return output;
};

// Return an object containing the count of each character in a string.
const charFrequencies = (string) => {
  const map1 = new Map();

  let i = 0;
  while (i < string.length) {
    map1.has(string[i])
      ? map1.set(string[i], map1.get(string[i]) + 1)
      : map1.set(string[i], 1);
    i++;
  }

  return map1;
};

// Return the first value you encounter that has already appeared earlier in the array.
// Return null if none exists.

const firstRepeatedValue = (arr) => {
  const set = new Set();

  let i = 0;
  while (i < arr.length) {
    if (set.has(arr[i])) return arr[i];
    set.add(arr[i]);
    i++;
  }
  return null;
};

// Determine whether two strings contain the same characters with the same frequencies.
//  Assume lowercase letters only.

const anagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  let i = 0;
  while (i < str1.length) {
    map1.has(str1[i])
      ? map1.set(str1[i], map1.get(str1[i]) + 1)
      : map1.set(str1[i], 1);
    map2.has(str2[i])
      ? map2.set(str2[i], map2.get(str2[i]) + 1)
      : map2.set(str2[i], 1);
    i++;
  }

  for (const [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }
  return true;
};

// Determine whether a string reads the same backward and forward.
// Ignore capitalization, spaces, and punctuation.

const palindrome = (str) => {
  const newStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();

  let left = 0;
  let right = newStr.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
};
