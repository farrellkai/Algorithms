// ALL SOLUTIONS SHOULD HAVE O(logn) TIME COMPLEXITY!!!

// Write a function, binarySearch, that takes in a sorted array of numbers and a target.
// The function should return the index where the target can be found within the array.
// If the target is not found in the array, then return -1.
// You may assume that the input array contains unique numbers sorted in increasing order.
// Your function must implement the binary search algorithm.
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    if (arr[mid] > target) right = mid - 1;
  }
  return -1;
};

// Write a function that takes in a sorted array of numbers and a target.
// The function should return the index where the target can be found within the array.
// If the target is not found in the array, then return the index where it should appear in the sorted order.
// You may assume that the input array contains unique numbers sorted in increasing order.
const binarySearchIndex = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    if (arr[mid] > target) right = mid - 1;
  }
  return left;
};

// Write a function that takes in a nonnegative integer n as input.
// The function should return the square root of n rounded down to the nearest integer.
// You may not use built-in methods like or that trivialize this problem.
const squareRoot = (n) => {};
