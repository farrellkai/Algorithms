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
  //base case: if root is null return negative Infinity
  if (!root) return -Infinity;
  //base case: if root has no children return its value
  if (!root.left && !root.right) return root.val;
  //declare variable 'greater' assign to result of function with left child or right child depending on which result is greater
  const greater =
    maxPathSum(root.left) > maxPathSum(root.right)
      ? maxPathSum(root.left)
      : maxPathSum(root.right);
  //return sum of root value and greater variable
  return root.val + greater;
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
// console.log(maxPathSum(a));
// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(54);
// const d = new Node(20);
// const e = new Node(15);
// const f = new Node(1);
// const g = new Node(3);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// e.left = f;
// e.right = g;
// console.log(maxPathSum(a));
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(0);
// const f = new Node(-13);
// const g = new Node(-1);
// const h = new Node(-2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;
// console.log(maxPathSum(a));
// const a = new Node(42);
// console.log(maxPathSum(a));

//tree path finder function
const treePathFinder = (root, target) => {
  //base case: if root is null return null
  if (!root) return null;
  //base case: if root value matches target return value in an array
  if (root.val === target) return [root.val];
  //recursive case: declare variable 'leftValues' assign to result of function with passed in left child
  const leftValues = treePathFinder(root.left, target);
  //if leftValues is not null place root's value at index 0
  if (leftValues) leftValues.unshift(root.val);
  //recursive case: declare variable 'rightValues' assign to result of function with passed in right child
  const rightValues = treePathFinder(root.right, target);
  //if rightValues is not null place root's value at index 0
  if (rightValues) rightValues.unshift(root.val);
  //if one of the variables is not null, return that variable, otherwise return null
  return leftValues ? leftValues : rightValues;
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
// console.log(treePathFinder(a, 'e'));
// console.log(treePathFinder(a, 'p'));
// const g = new Node('g');
// const h = new Node('h');

// e.left = g;
// f.right = h;
// console.log(treePathFinder(a, 'c'));
// console.log(treePathFinder(a, 'h'));
// const x = new Node('x');
// console.log(treePathFinder(x, 'x'));
// console.log(treePathFinder(null, 'x'));

//tree value count function
const treeValueCount = (root, target) => {
  //base case: if root is null return 0
  if (!root) return 0;
  //recursive case: if root matches target return sum of function on left child and right child plus 1 otherwise just sum of two functions
  return root.val === target
    ? treeValueCount(root.left, target) + treeValueCount(root.right, target) + 1
    : treeValueCount(root.left, target) + treeValueCount(root.right, target);
};

//test cases
// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// console.log(treeValueCount(a, 6));
// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// console.log(treeValueCount(a, 12));
// const a = new Node(7);
// const b = new Node(5);
// const c = new Node(1);
// const d = new Node(1);
// const e = new Node(8);
// const f = new Node(7);
// const g = new Node(1);
// const h = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;
// console.log(treeValueCount(a, 1));
//console.log(treeValueCount(a, 9));
//console.log(treeValueCount(null, 42));

//how high function
const howHigh = (root) => {
  //base case: if root is null return -1
  if (!root) return -1;
};
