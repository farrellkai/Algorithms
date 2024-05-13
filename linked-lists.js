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
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;

// console.log(llFind(a, 'c'));
// console.log(llFind(a, 'd'));
// console.log(llFind(a, 'q'));

// const node1 = new Node('jason');
// const node2 = new Node('leneli');

// node1.next = node2;

// console.log(llFind(node1, 'jason'));

// const node3 = new Node(42);

// console.log(llFind(node3, 42));
// console.log(llFind(node3, 100));

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
// console.log(llFind2(a, 'c'));
// console.log(llFind2(a, 'd'));
// console.log(llFind2(a, 'q'));
// console.log(llFind2(node1, 'jason'));
// console.log(llFind2(node3, 42));
// console.log(llFind2(node3, 100));

//get node value function
const getNodeVal = (head, index) => {
  //declare let variable 'i' assign to 0
  let i = 0;
  //declare let variable 'node' assign to head
  let node = head;
  //iterate through ndoes in list
  while (node !== null) {
    //if i equates to index return current node's value
    if (i === index) return node.val;
    //increment i
    i++;
    //move to next node
    node = node.next;
  }
  //if loop is broken return null;
  return null;
};

//test cases
// console.log(getNodeVal(a, 2));
// console.log(getNodeVal(a, 3));
// console.log(getNodeVal(a, 7));
// console.log(getNodeVal(node1, 0));
// console.log(getNodeVal(node1, 1));

//alternate get node value funtion
const getNodeVal2 = (head, index) => {
  //base case: if head does not exist return null
  if (!head) return null;
  //base case: if index is 0 return head value
  if (index === 0) return head.val;
  //return function with next node and index minus 1 as arguments
  return getNodeVal2(head.next, --index);
};

//test cases
// console.log(getNodeVal2(a, 2));
// console.log(getNodeVal2(a, 3));
// console.log(getNodeVal2(a, 7));
// console.log(getNodeVal2(node1, 0));
// console.log(getNodeVal2(node1, 1));

//reverse linked list function
const reverseList = (head) => {
  //declare let variable 'prev'
  let prev;
  //declare let variable 'cur' assign to head
  let cur = head;
  //declare let variable 'next' assign to head
  let next = head;
  //iterate thorugh nodes in list
  while (cur !== null) {
    //reassign next to next.next
    next = next.next;
    //assign cur.next to value of prev
    cur.next = prev;
    //reassign prev to cur
    prev = cur;
    //reassign cur to next
    cur = next;
  }
  return prev;
};

//test cases
// console.log(reverseList(a));
// console.log(reverseList(node1));
// console.log(reverseList(node3));

//alternate reverse linked list function
const reverseList2 = (head, next = head.next, prev = null) => {
  //assign head's next property to prev
  head.next = prev;
  //base case: if next is null return head
  if (!next) return head;
  //recursive case: return function with next, next.next, and head as arguments respectivley
  return reverseList2(next, next.next, head);
};

//test cases
// console.log(reverseList2(a));
// console.log(reverseList2(node1));
// console.log(reverseList2(node3));

//zipper list function
const zipperList = (head1, head2) => {
  //declare let variable 'count' assign to 1
  let count = 1;
  //declare let variable 'tail' assign to head1
  let tail = head1;
  //declare let variables 'next1' & 'next2' assign to head1.next & head2 respectively
  let next1 = head1;
  let next2 = head2;
  //iterate through nodes on both lists
  while (next1 !== null || next2 !== null) {
    if (count % 2 !== 0) {
      if (!next2) break;
      tail.next = next2;
      next2 = next2.next;
    } else {
      if (!next1) break;
      tail.next = next1;
      next1 = next1.next;
    }
    tail = tail.next;
    count++;
  }
  return head1;
};
//test cases
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// a.next = b;
// b.next = c;

// const x = new Node('x');
// const y = new Node('y');
// const z = new Node('z');
// x.next = y;
// y.next = z;

// console.log(zipperList(a, x));
// console.log(zipperList());
// console.log(zipperList());
// console.log(zipperList());
// console.log(zipperList());

//merge lists function
const mergeList = (head1, head2) => {
  //declare variable 'dummy' assign to new Node instance
  const dummy = new Node('dummy');
  //declare let variables 'cur1' & 'cur2' assign to head1 & head2 respectively
  let cur1 = head1;
  let cur2 = head2;
  //declare let variables 'next1' & 'next2' assign to head1.next & head2.next respectively
  let next1 = head1.next;
  let next2 = head2.next;
  //declare let variable 'tail' assign to dummy
  let tail = dummy;
  //iterate through nodes in both lists
  while (cur1 !== null || cur2 !== null) {
    //if cur1 & cur2 exist
    if (cur1 && cur2) {
      //if cur1 value is less than cur2 value
      if (cur1.val < cur2.val) {
        //assign next property of tail to cur1
        tail.next = cur1;
        //reassign cur1 to next node
        cur1 = cur1.next;
      }
      //else if cur2 value is less than cur1 value
      else if (cur2.val < cur1.val) {
        //assign next property of tail to cur2
        tail.next = cur2;
        //reassign cur2 to next node
        cur2 = cur2.next;
      }
    }
  }
};

//univalue list function
const univalue = (head) => {
  //declare variable 'headVal' assign to head node's value property
  const headVal = head.val;
};
