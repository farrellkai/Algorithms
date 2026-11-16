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
const squareRoot = (n) => {
  let left = 0;
  let right = n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (Math.floor(n / mid) === mid) return mid;
    if (Math.floor(n / mid) > mid) left = mid + 1;
    if (Math.floor(n / mid) < mid) right = mid - 1;
  }
};

// Write a function that takes in a sorted array of numbers and a target as arguments.
// The function should return the leftmost index where the target can be found in the array.
// If the target does not exist in the array, then return -1.
const findLeftmostIndex = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let output = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      output = mid;
      right = mid - 1;
    }
    if (arr[mid] < target) left = mid + 1;
    if (arr[mid] > target) right = mid - 1;
  }
  return output;
};

const findRightmostIndex = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let output = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      output = mid;
      left = mid + 1;
    }
    if (arr[mid] < target) left = mid + 1;
    if (arr[mid] > target) right = mid - 1;
  }
  return output;
};

// Write a function that takes in a sorted array of numbers and a target as arguments.
// The function should return the number of times the target element appears in the array.
const countInSortedArray = (arr, target) => {
  const left = findLeftmostIndex(arr, target);
  const right = findRightmostIndex(arr, target);
  return right - left + 1;
};

// Write a function that takes in an array of sorted numbers that has been rotated a number of times.
// The function should return the minimum element of the array.
// You can assume that the numbers of the input array are unique.
const minInRotatedSortedArray = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // const newLow = Math.min(nums[left], nums[mid], nums[right]);
    // if (newLow < lowest) lowest = newLow;
    if (nums[left] <= nums[right]) return nums[left];
    if (nums[left] > nums[right]) {
      nums[mid] > nums[right] ? (left = mid + 1) : (right = mid);
    }
  }
};

// Write a function that takes in an array of sorted numbers that has been rotated a number of times, as well as a target element.
// The function should return the index of the target in the array. If the target is not found in the array, then return -1.
// You can assume that the input array contains unique elements.
const minInRotatedSortedArrayIndex = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // const newLow = Math.min(nums[left], nums[mid], nums[right]);
    // if (newLow < lowest) lowest = newLow;
    if (nums[left] <= nums[right]) return left;
    if (nums[left] > nums[right]) {
      nums[mid] > nums[right] ? (left = mid + 1) : (right = mid);
    }
  }
};

const findInRotatedSortedArray = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  const minIndex = minInRotatedSortedArrayIndex(arr);
  if (arr[left] > target) left = minIndex;
  if (arr[right] < target) right = minIndex - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    if (arr[mid] > target) right = mid - 1;
  }
  return -1;
};

// Write a function that takes in an array of numbers. The function should return the index of a "peak" element.
// A "peak" is an element that is greater than both of its adjacent neighbors.
// If there are multiple peaks, you may return the index of any one of them.
// Note that the first and last elements of the array only need to be greater than their single neighbor to be considered a "peak".
// You can assume that adjacent numbers of the list are not equal.
const findPeak = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
  }
};
