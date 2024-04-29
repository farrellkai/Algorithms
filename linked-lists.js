//Node generator
function Node(val) {
  this.val = val;
  this.next = null;
}

//linked list values function
const llValues = (head) => {
  //declare output variable assign to empty arry
  const output = [];
  //declare let variable 'node' assign to head
  let node = head;
  //iterate through each node in list
  while (node !== null) {
    //push value of node to output
    output.push(node.val);
    //reassign node to next node in list
    node = node.next;
  }
  return output;
};

//test cases
// const a1 = new Node('a');
// const b1 = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a1.next = b1;
// b1.next = c;
// c.next = d;

// console.log(llValues(a1));

// const x = new Node('x');
// const y = new Node('y');

// x.next = y;

// console.log(llValues(x));

// const q = new Node('q');

// console.log(llValues(q));
// console.log(llValues(null));

//alternative linked list values function
const llValues2 = (head, output = []) => {
  //if head is null return output
  if (!head) return output;
  //push head value onto output
  output.push(head.val);
  //return function with next node as argument
  return llValues2(head.next, output);
};

//test cases
// const a1 = new Node('a');
// const b1 = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a1.next = b1;
// b1.next = c;
// c.next = d;

// console.log(llValues2(a1));

// const x = new Node('x');
// const y = new Node('y');

// x.next = y;

// console.log(llValues2(x));

// const q = new Node('q');

// console.log(llValues2(q));
// console.log(llValues2(null));

//sumList function
const sumList = (head) => {
  //declare let variable 'sum' assign to zero
  let sum = 0;
  //declare let variable 'node' assign to head
  let node = head;
  //iterate through list
  while (node !== null) {
    //add current value to sum
    sum += node.val;
    //reassign node to next node in list
    node = node.next;
  }
  return sum;
};

//test cases
// const a1 = new Node(2);
// const b1 = new Node(8);
// const c = new Node(3);
// const d = new Node(-1);
// const e = new Node(7);

// a1.next = b1;
// b1.next = c;
// c.next = d;
// d.next = e;

// console.log(sumList(a1));

// const x = new Node(38);
// const y = new Node(4);

// x.next = y;

// console.log(sumList(x));

// const z = new Node(100);

// console.log(sumList(z));

// console.log(sumList(null));

//alternative sumList function
const sumList2 = (head, sum = 0) => {
  //base case: if head is null return sum
  if (!head) return sum;
  //recursive case: return function with next node as argument and head value plus sum as next argument
  return sumList2(head.next, sum + head.val);
};

//test cases
// const a1 = new Node(2);
// const b1 = new Node(8);
// const c = new Node(3);
// const d = new Node(-1);
// const e = new Node(7);

// a1.next = b1;
// b1.next = c;
// c.next = d;
// d.next = e;

// console.log(sumList2(a1));

// const x = new Node(38);
// const y = new Node(4);

// x.next = y;

// console.log(sumList2(x));

// const z = new Node(100);

// console.log(sumList2(z));

// console.log(sumList2(null));

//linked list find function
const llFind = (head, tar) => {
  //declare let variable 'node' assign to head
  let node = head;
  //iterate through nodes in list
  while (node !== null) {
    //if node value is target value return true
    if (node.val === tar) return true;
    //move to next node in list
    node = node.next;
  }
  return false;
};

//test cases
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

console.log(llFind(a, 'c'));
console.log(llFind(a, 'd'));
console.log(llFind(a, 'q'));

const node1 = new Node('jason');
const node2 = new Node('leneli');

node1.next = node2;

console.log(llFind(node1, 'jason'));

const node3 = new Node(42);

console.log(llFind(node3, 42));
console.log(llFind(node3, 100));

//alternate linked list find function
const llFind2 = (head, tar) => {
  //edge case: if head does not exist return false
  if (!head) return false;
  //edge case 2: if node value is target return true
  if (head.val === tar) return true;
  //recursive case: return llFind2 w/ next node as argument
  return llFind2(head.next, tar);
};

//test cases
console.log(llFind2(a, 'c'));
console.log(llFind2(a, 'd'));
console.log(llFind2(a, 'q'));
console.log(llFind2(node1, 'jason'));
console.log(llFind2(node3, 42));
console.log(llFind2(node3, 100));

//get node value function
const getNodeVal = (head, index) => {};
