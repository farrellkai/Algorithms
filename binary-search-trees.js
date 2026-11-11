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
const treeSum = (root) => {};
