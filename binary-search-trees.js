const { rootTaskDispose } = require('next/dist/build/swc/generated-native');

//node generator
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Write a function, depthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all values of the tree in depth-first order.
const depthFirstValues = (root) => {
  const stack = [root];
  const output = [];

  while (stack[0]) {
    //console.log(stack[0])
    const node = stack.pop();
    output.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return output;
};

const depthFirstValuesR = (root, output = []) => {
  if (!root) return output;
  output.push(root.val);
  depthFirstValuesR(root.left, output);
  depthFirstValuesR(root.right, output);
  return output;
};

// Write a function, breadthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all values of the tree in breadth-first order.
const breadthFirstValues = (root) => {
  if (!root) return [];
  const queue = [root];
  const output = [];
  while (queue[0]) {
    const node = queue.shift();
    output.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return output;
};

// Write a function, treeSum, that takes in the root of a binary tree that contains number values.
// The function should return the total sum of all values in the tree.
const treeSumDepth = (root) => {
  if (!root) return 0;
  let sum = 0;
  const stack = [root];
  while (stack[0]) {
    const node = stack.pop();
    sum += node.val;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return sum;
};

const treeSumBredth = (root) => {
  if (!root) return 0;
  let sum = 0;
  const queue = [root];
  while (queue[0]) {
    const node = queue.shift();
    sum += node.val;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return sum;
};

const treeSumR = (root) => {
  if (!root) return 0;
  return root.val + treeSumR(root.left) + treeSumR(root.right);
};

// Write a function, treeIncludes, that takes in the root of a binary tree and a target value.
// The function should return a boolean indicating whether or not the value is contained in the tree.
const treeIncludesDepth = (root, target) => {
  if (!root) return false;
  const stack = [root];
  while (stack[0]) {
    const node = stack.pop();
    if (node.val === target) return true;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return false;
};

const treeIncludesBredth = (root, target) => {
  if (!root) return false;
  const queue = [root];
  while (queue[0]) {
    const node = queue.shift();
    if (node.val === target) return true;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return false;
};

const treeIncludesR = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  const left = treeIncludesR(root.left, target);
  const right = treeIncludesR(root.right, target);
  return left || right ? true : false;
};

// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values.
// The function should return the minimum value within the tree.
const treeMinValue = (root) => {
  if (!root) return Infinity;
  if (!root.left && !root.right) return root.val;
  const left = treeMinValue(root.left);
  const right = treeMinValue(root.right);
  return Math.min(root.val, left, right);
};

// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
// The function should return the maximum sum of any root to leaf path within the tree.
const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;
  const left = root.val + maxPathSum(root.left);
  const right = root.val + maxPathSum(root.right);
  return left > right ? left : right;
};

// Write a function, pathFinder, that takes in the root of a binary tree and a target value.
// The function should return an array representing a path to the target value.
// If the target value is not found in the tree, then return null.

//NOT FINISHED!!!!!
const pathFinder = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [root.val];
  const left = pathFinder(root.left, target);
  const right = pathFinder(root.right, target);
  if (left) left.unshift(root.val);
  if (right) right.unshift(root.val);
  if (left && right) return left.concat(right);
  if (!left && right) return right;
  if (left && right) return left;
};

// Write a function, treeValueCount, that takes in the root of a binary tree and a target value.
// The function should return the number of times that the target occurs in the tree.
const treeValueCountDepth = (root, target) => {
  let count = 0;
  const stack = [root];
  while (stack[0]) {
    const node = stack.pop();
    if (node.val === target) count++;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return count;
};

const treeValueCountBredth = (root, target) => {
  let count = 0;
  const queue = [root];
  while (queue[0]) {
    const node = queue.shift();
    if (node.val === target) count++;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return count;
};

const treeValueCountR = (root, target) => {
  if (!root) return 0;
  const left = treeValueCountR(root.left, target);
  const right = treeValueCountR(root.right, target);
  const sum = left + right;
  return root.val === target ? 1 + sum : sum;
};

// Write a function, howHigh, that takes in the root of a binary tree.
// The function should return a number representing the height of the tree.
// The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.
// If the tree is empty, return -1.
const howHigh = (root) => {
  if (!root) return -1;
  if (!root.left && !root.right) return 0;
  const left = howHigh(root.left);
  const right = howHigh(root.right);
  return left > right ? 1 + left : 1 + right;
};

// Write a function, bottomRightValue, that takes in the root of a binary tree.
// The function should return the right-most value in the bottom-most level of the tree.
const bottomRightValue = (root) => {
  let value;
  const queue = [root];
  while (queue[0]) {}
};
