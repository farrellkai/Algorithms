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
  const map = new Map();

  let i = 0;
  while (i < string.length) {
    map.has(string[i])
      ? map.set(string[i], map.get(string[i]) + 1)
      : map.set(string[i], 1);
    i++;
  }
  console.log(map);
  i = 0;
  while (i < string.length) {
    if (map.get(string[i]) === 1) return string[i];
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
  const map = new Map();

  let i = 0;
  while (i < string.length) {
    map.has(string[i])
      ? map.set(string[i], map.get(string[i]) + 1)
      : map.set(string[i], 1);
    i++;
  }

  return map;
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
  const map = new Map();

  let i = 0;
  while (i < str1) {
    i++;
  }
};
