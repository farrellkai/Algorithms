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
  //if root is null return empty array
  if (!root) return [];
  //declare variable 'values' assign to empty array
  const values = [];
  //declare variable 'stack' assign to array containing root
  const stack = [root];
  //iterate through elements in stack
  while (stack.length) {
    //declare variable 'node' assign to first element in stack and remove
    const node = stack.pop();
    //push node value onto values array
    values.push(node.val);
    //if node has child on right property push onto stack array
    if (node.right) stack.push(node.right);
    //if node has child on left property push onto stack array
    if (node.left) stack.push(node.left);
  }
  return values;
};

//test cases
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// console.log(depthFirstValues(a));
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// console.log(depthFirstValues(a));
// const a = new Node('a');
// console.log(depthFirstValues(a));
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.right = b;
// b.left = c;
// c.right = d;
// d.right = e;
// console.log(depthFirstValues(a));
//console.log(depthFirstValues(null));

//alternate depth first values function
const depthFirstValues2 = (root) => {
  //base case: if root is null return empty array
  if (!root) return [];
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

//test cases
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// console.log(depthFirstValues2(a));
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// console.log(depthFirstValues(a));
// const a = new Node('a');
// console.log(depthFirstValues(a));
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.right = b;
// b.left = c;
// c.right = d;
// d.right = e;
// console.log(depthFirstValues(a));
//console.log(depthFirstValues(null));

//bredth first values function
const bredthFirstValues = (root) => {
  //if root is null return empty array
  if (!root) return [];
  //declare variable 'trees' assign to array containing root
  const trees = [root];
  //declare variable 'output' assign to empty array
  const output = [];
  //iterate through the nodes
  while (trees.length) {
    //declare variable 'node' assign to first element in trees and remove
    const node = trees.pop();
    //push node value onto output array
    output.push(node.val);
    //push left child onto trees if it exists
    if (node.left) trees.push(node.left);
    //push right child onto trees if it exists
    if (node.right) trees.push(node.right);
  }
};
