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
    const node = trees.shift();
    //push node value onto output array
    output.push(node.val);
    //push left child onto trees if it exists
    if (node.left) trees.push(node.left);
    //push right child onto trees if it exists
    if (node.right) trees.push(node.right);
  }
  return output;
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
// console.log(bredthFirstValues(a));
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');
// const h = new Node('h');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;
// console.log(bredthFirstValues(a));
// const a = new Node('a');
// console.log(bredthFirstValues(a));
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const x = new Node('x');

// a.right = b;
// b.left = c;
// c.left = x;
// c.right = d;
// d.right = e;
// console.log(bredthFirstValues(a));
// console.log(bredthFirstValues(null));

//tree sum function
const treeSum = (root) => {
  //base case: if root is null return 0
  if (!root) return 0;
  //recursive case: return sum of root value and result of function with left child and right child
  return root.val + treeSum(root.left) + treeSum(root.right);
};

//test cases
// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// console.log(treeSum(a));
// const a = new Node(1);
// const b = new Node(6);
// const c = new Node(0);
// const d = new Node(3);
// const e = new Node(-6);
// const f = new Node(2);
// const g = new Node(2);
// const h = new Node(2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;
// console.log(treeSum(a));
//console.log(treeSum(null));

//tree includes function
const treeIncludes = (root, target) => {
  //base case: if root is null return false
  if (!root) return false;
  //base case: if root value matches target return true
  if (root.val === target) return true;
  //recursive case: if result of function on left child or right child is true return true else return false
  return treeIncludes(root.left, target) || treeIncludes(root.right, target)
    ? true
    : false;
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
// console.log(treeIncludes(a, 'e'));
// console.log(treeIncludes(a, 'a'));
// console.log(treeIncludes(a, 'n'));
// const g = new Node('g');
// const h = new Node('h');

// e.left = g;
// f.right = h;
// console.log(treeIncludes(a, 'f'));
// console.log(treeIncludes(a, 'p'));
// console.log(treeIncludes(null, 'b'));

//tree min value function
const treeMinVal = (root) => {
  //base case: if root is null return Infinity
  if (!root) return Infinity;
  //recursive case: return smallest value between root value and result of function on left child and right child
  return Math.min(root.val, treeMinVal(root.left), treeMinVal(root.right));
};

//test cases
// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// console.log(treeMinVal(a));
// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(14);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// console.log(treeMinVal(a));
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(-4);
// const f = new Node(-13);
// const g = new Node(-2);
// const h = new Node(-2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;
// console.log(treeMinVal(a));
// const a = new Node(42);
// console.log(treeMinVal(a));

//max path sum function
const maxPathSum = (root) => {
  //base case: if root is null return 0
  if (!root) return 0;
  //declare variable 'greater' assign to result of function with left child or right child depending on which result is greater
  const greater =
    maxPathSum(root.left) > maxPathSum(root.right)
      ? maxPathSum(root.left)
      : maxPathSum(root.right);
};
