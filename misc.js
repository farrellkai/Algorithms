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

  // i = 0;
  // while (i < arr.length) {
  //   if ()
  // }
};

console.log(firstUniqueChar('farrell'));
