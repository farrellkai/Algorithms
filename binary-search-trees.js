//node generator
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//depth first values function
const depthFirstValues = (root) => {
  //base case: if root is null return empty array
  if (!root) return [];
  //base case: if root has no children return array containing root value
  if (!root.left && root.right) return [root.val];
  //recursive case: return concatination of result of function on left node and right node
  return depthFirstValues(root.left).concat(depthFirstValues(root.right));
};
