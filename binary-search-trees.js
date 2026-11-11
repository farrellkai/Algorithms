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
    const node = stack.pop();
    output.push(node.val);
    stack.push(node.right);
    stack.push(node.left);
  }

  return output;
};

const depthFirstValuesR = (root, output = []) => {};
