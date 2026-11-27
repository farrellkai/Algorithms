// Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.
// The 0-th number of the sequence is 0.
// The 1-st number of the sequence is 1.
// To generate further numbers of the sequence, calculate the sum of previous two numbers.
// Solve this recursively.
const fib = (n, memo = {}) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (!memo[n]) memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
  return memo[n];
};

// Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.
// The 0-th and 1-st numbers of the sequence are both 0.
// The 2-nd number of the sequence is 1.
// To generate further numbers of the sequence, calculate the sum of previous three numbers.
// Solve this recursively.
const trib = (n, memo = {}) => {
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;
  if (!memo[n])
    memo[n] = trib(n - 3, memo) + trib(n - 2, memo) + trib(n - 1, memo);
};
