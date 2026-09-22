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
    if (right >= k) {
      if (sum > maxSum) maxSum = sum;
    }
    right++;
  }
  return maxSum;
};

console.log(maxSubArrSumSizeK([-4, -18, -2, -5, -9], 2));
