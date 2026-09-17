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
    if (newStr[left] !== newStr[right]) return false;
    left++;
    right--;
  }
  return true;
};

// Modify an array so all zeroes appear at the end while preserving the order of the other numbers.
// Don’t create another array.

const moveZeroes = (arr) => {
  let insertPointer = 0;

  let i = 0;
  while (insertPointer < arr.length) {
    if (i === arr.length) {
      arr[insertPointer] = 0;
      insertPointer++;
    }
    if (i < arr.length) {
      if (arr[i] !== 0) {
        arr[insertPointer] = arr[i];
        insertPointer++;
      }
      i++;
    }
  }

  return arr;
};

const arr = [0, 0, 3, 0, 1, 0, 2, 0, 7, 3, 4, 0];
console.log(moveZeroes(arr));

// An array contains distinct integers from 0 through n, with exactly one missing.
// Find it.

const missingNum = (arr) => {
  const set = new Set();

  let i = 0;
  while (i < arr.length) {
    set.add(arr[i]);
    i++;
  }

  while (i >= 0) {
    if (!set.has(i)) return i;
    i--;
  }
};

// Return the indices of two numbers that add up to a target.
// You cannot use the same element twice.
// Return null if no pair exists.

const twoSum = (arr, target) => {
  const cache = {};

  let i = 0;
  while (i < arr.length) {
    cache[arr[i]] = i;
    i++;
  }

  i = 0;
  while (i < arr.length) {
    const diff = target - arr[i];
    if (cache[diff]) return [i, cache[diff]];
    i++;
  }

  return null;
};

// Return the distinct values found in both arrays,
// in the order they appear in the first array.

const arrIntersection = (arr1, arr2) => {
  const set = new Set();
  const output = [];

  for (let el of arr2) {
    if (!set.has(el)) set.add(el);
  }

  for (let el of arr1) {
    if (set.has(el)) {
      output.push(el);
      set.delete(el);
    }
  }
  return output;
};

// Return the most frequent number in an array.
// If tied, return the one that appears first.
// Return null for an empty array.

const mostFrequent = (arr) => {
  const map = new Map();
  let count = 0;
  let cur = null;

  const singleValues = [];

  for (let el of arr) {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
      singleValues.push(el);
    }
  }

  for (let el of singleValues) {
    if (map.get(el) > count) {
      count = map.get(el);
      cur = el;
    }
  }
  return cur;
};

// Return the longest word in a sentence. If tied, return the first.
// Assume words are separated by single spaces and contain no punctuation.

const longestWord = (str) => {
  let longestValue = 0;
  let word;
  let cur = '';

  let i = 0;
  while (i < str.length) {
    if (str[i] !== ' ') {
      cur += str[i];
    }
    if (str[i] === ' ' || i === str.length - 1) {
      if (cur.length > longestValue) {
        longestValue = cur.length;
        word = cur;
      }
      cur = '';
    }
    i++;
  }
  return word;
};

// Combine two ascending arrays into one ascending array without calling .sort().

const mergeSortedArrays = (arr1, arr2) => {
  const output = [];

  let point1 = 0;
  let point2 = 0;
  while (point1 < arr1.length || point2 < arr2.length) {
    if (
      arr1[point1] < arr2[point2] ||
      arr1[point1] === arr2[point2] ||
      arr2[point2] === undefined
    ) {
      output.push(arr1[point1]);
      point1++;
    }
    if (arr2[point2] !== undefined) {
      if (
        arr2[point2] < arr1[point1] ||
        arr2[point2] === arr1[point1] ||
        !arr1[point1]
      ) {
        output.push(arr2[point2]);
        point2++;
      }
    }
  }
  return output;
};

// Given an ascending array of distinct numbers and a target, return the target’s index or -1.
// Use binary search.

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.round((right - left) / 2);
};
