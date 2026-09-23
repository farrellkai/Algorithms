// Write a function that takes in an array of numbers and a size k as arguments.
// The function should return the maximum sum of subarrays that contain exactly k elements.
// You can assume that k is less than or equal to the length of the input array.

const maxSubArrSumSizeK = (arr, k) => {
  let maxSum = -Infinity;
  let sum = 0;

  let left = 0;
  let right = 0;
  while (right < arr.length) {
    if (right < k) {
      sum += arr[right];
    } else {
      sum = sum - arr[left] + arr[right];
      left++;
    }
    right++;
    if (right >= k) {
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
};

// Write a function that takes in an array of numbers and a size k as arguments.
// The function should return the maximum product of subarrays that contain exactly k elements.
// You can assume that k is less than or equal to the length of the input array.
// You can assume that numbers of the array are non-zero.

const maxSubarrayProductSizeK = (arr, k) => {
  let maxProduct = -Infinity;
  let product = 1;

  let left = 0;
  let right = 0;
  while (right < arr.length) {
    if (right >= k) {
      product /= arr[left];
      left++;
    }
    product *= arr[right];
    right++;
    if (right - left === k && product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
};

// Write a function that takes in an array of numbers, a target sum, and a size k as arguments.
// The function should return the number of subarrays of size k that sum to the target.
// You can assume that k is less than or equal to the length of the input array.

const subarrayTargetSumSizeK = (arr, target, k) => {
  let sum = 0;
  let count = 0;

  let left = 0;
  let right = 0;
  while (right < arr.length) {
    if (right >= k) {
      sum -= arr[left];
      left++;
    }
    sum += arr[right];
    right++;
    if (right - left === k && sum === target) count++;
  }
  return count;
};

// Write a function that takes in a string and an anagram.
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
  }
};
