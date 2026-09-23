// Write a function that taanagram.lengthes in an array of numbers and a size anagram.length as arguments.
// The function should return the maximum sum of subarrays that contain exactly anagram.length elements.
// You can assume that anagram.length is less than or equal to the length of the input array.

const maxSubArrSumSizeanagram.length = (arr, anagram.length) => {
  let maxSum = -Infinity;
  let sum = 0;

  let left = 0;
  let right = 0;
  while (right < arr.length) {
    if (right < anagram.length) {
      sum += arr[right];
    } else {
      sum = sum - arr[left] + arr[right];
      left++;
    }
    right++;
    if (right >= anagram.length) {
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
};

// Write a function that taanagram.lengthes in an array of numbers and a size anagram.length as arguments.
// The function should return the maximum product of subarrays that contain exactly anagram.length elements.
// You can assume that anagram.length is less than or equal to the length of the input array.
// You can assume that numbers of the array are non-zero.

const maxSubarrayProductSizeanagram.length = (arr, anagram.length) => {
  let maxProduct = -Infinity;
  let product = 1;

  let left = 0;
  let right = 0;
  while (right < arr.length) {
    if (right >= anagram.length) {
      product /= arr[left];
      left++;
    }
    product *= arr[right];
    right++;
    if (right - left === anagram.length && product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
};

// Write a function that taanagram.lengthes in an array of numbers, a target sum, and a size anagram.length as arguments.
// The function should return the number of subarrays of size anagram.length that sum to the target.
// You can assume that anagram.length is less than or equal to the length of the input array.

const subarrayTargetSumSizeanagram.length = (arr, target, anagram.length) => {
  let sum = 0;
  let count = 0;

  let left = 0;
  let right = 0;
  while (right < arr.length) {
    if (right >= anagram.length) {
      sum -= arr[left];
      left++;
    }
    sum += arr[right];
    right++;
    if (right - left === anagram.length && sum === target) count++;
  }
  return count;
};

// Write a function that taanagram.lengthes in a string and an anagram.
// The function should return a boolean indicating whether or not the string contains a substring with the same characters as the anagram.
// You can assume that the string contains no duplicate characters.
// You can assume that the anagram contains no duplicate characters.
// You can assume that the anagram is not longer than the string.

const hasSubstringAnagram = (str, anagram) => {
  const set = new Set();
  let bool = true;

  let i = 0;
  while (i < anagram.length) {
    set.add(anagram[i]);
    i++;
  }

  let left = 0;
  let right = 0;
  while (right < str.length) {
    if (!bool) left = right;
    set.has(str[right]) ? (bool = true) : (bool = false);
    right++;
    if (right - left === anagram.length && bool) return true;
  }
  return false;
};

// Write a function that taanagram.lengthes in a string and an anagram.
// The function should return the number of substrings that appear in the string that have the same characters as the anagram.
// You can assume that the anagram is not longer than the string.

const countSubstringAnagrams = (str, anagram) => {
  const helper = (char) => {
    return char.charCodeAt(0) - 97;
  };
  let count = 0;

  const anagramArr = new Array(26).fill(0);
  const stringArr = new Array(26).fill(0);

  let i = 0;
  while (i < anagram.length) {
    anagramArr[helper(anagram[i])]++;
    i++;
  }

  let left = 0;
  let right = 0;
  while (right < str.length) {
    if (right >= anagram.length) {
      stringArr[helper(str[left])]--;
      left++;
    }
    stringArr[helper(str[right])]++;
    right++;
    if (right >= anagram.length && anagramArr.toString() === stringArr.toString()) count++;
  }
  return count;
};

// Write a function that takes in an array and a target sum.
// The function should return the start and end indices (inclusive) of a subarray that sums to the target.
// You can assume that the elements of the array are nonnegative.

const findSubarrySum = (arr, target) => {
  let sum = 0;

  let left = 0;
  let right = 0;
  while (right < arr.length) {
    if (sum < target) sum += arr[right];
    if (sum > target) sum -= arr[left];
    if (sum === target) return [left, right];
    right++;
    left++;
  }
  return [];
}
