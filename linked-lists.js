const { headers } = require('next/headers');

//Node generator
function Node(val) {
  this.val = val;
  this.next = null;
}

// Write a function, linkedListValues, that takes in the head of a linked list as an argument.
// The function should return an array containing all values of the nodes in the linked list.
const linkedListValues = (head) => {
  const output = [];

  let node = head;
  while (node) {}
  output.push(node.val);
  node = node.next;

  return output;
};

const linkedListValuesRecursive = (head, output = []) => {
  if (!head) return output;
  output.push(head.val);
  return linkedListValuesRecursive(head.next, output);
};

// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument.
// The function should return the total sum of all values in the linked list.
const sumList = (head) => {
  let sum = 0;

  let node = head;
  while (node) {
    sum += node.val;
    node = node.next;
  }
  return sum;
};

const sumListRecursive = (head) => {
  if (!head) return 0;
  return head.val + sumListRecursive(head.next);
};

// Write a function, linkedListFind, that takes in the head of a linked list and a target value.
// The function should return a boolean indicating whether or not the linked list contains the target.
const linkedListFind = (head, target) => {
  let node = head;
  while (node) {
    if (node.val === target) return true;
    node = node.next;
  }
  return false;
};

const linkedListFindRecursive = (head, target) => {
  if (!head) return false;
  if (head.val === target) return true;
  return linkedListFindRecursive(head.next, target);
};

// Write a function, getNodeValue, that takes in the head of a linked list and an index.
// The function should return the value of the linked list at the specified index.
// If there is no node at the given index, then return null.
const getNodeValue = (head, index) => {
  let count = 0;

  let node = head;
  while (node && count <= index) {
    if (count === index) return node.val;
    count++;
    node = node.next;
  }

  return null;
};

const getNodeValueRecursive = (head, index) => {
  if (!head) return null;
  if (index === 0) return head.val;
  return getNodeValueRecursive(head.next, --index);
};

// Write a function, reverseList, that takes in the head of a linked list as an argument.
// The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
const reverseList = (head) => {
  let cur = head;
  let prev = null;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
//INCOMPLETE
const reverseListRecursive = (head) => {
  if (!head) return null;
};

// Write a function, zipperLists, that takes in the head of two linked lists as arguments.
// The function should zipper the two lists together into single linked list by alternating nodes.
// If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes.
// The function should return the head of the zippered linked list.
const zipperLists = (head1, head2) => {
  let status = true;

  const dummy = new Node(null);
  let tail = dummy;

  let node1 = head1;
  let node2 = head2;
  while (node1 && node2) {
    if (status) {
      tail.next = node1;
      node1 = node1.next;
    } else {
      tail.next = node2;
      node2 = node2.next;
    }
    tail = tail.next;
    status = !status;
  }
  if (node1) tail.next = node1;
  if (node2) tail.next = node2;
  return dummy.next;
};

const zipperListsRecursive = (head1, head2) => {};

// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments.
// The function should merge the two lists together into single sorted linked list.
// The function should return the head of the merged linked list.
const mergeLists = (head1, head2) => {
  const dummy = new Node(null);
  let tail = dummy;

  let node1 = head1;
  let node2 = head2;
  while (node1 && node2) {
    if (node1.val < node2.val) {
      tail.next = node1;
      node1 = node1.next;
    } else {
      tail.next = node2;
      node2 = node2.next;
    }
    if (tail.next) tail = tail.next;
  }
  if (node1) tail.next = node1;
  if (node2) tail.next = node2;
  return dummy.next;
};

const mergeListsRecursive = (head1, head2) => {
  if (!head1 && !head2) return null;
  if (!head2) return head1;
  if (!head1) return head2;
  const next1 = head1.next;
  const next2 = head2.next;
  if (head1.val < head2.val) {
    head1.next = mergeListsRecursive(next1, head2);
    return head1;
  } else {
    head2.next = mergeListsRecursive(head1, next2);
    return head2;
  }
};

// Write a function, isUnivalueList, that takes in the head of a linked list as an argument.
// The function should return a boolean indicating whether or not the linked list contains exactly one unique value.
const isUnivalueList = (head) => {
  let node = head;
  while (node) {
    if (node.val !== head.val) return false;
    node = node.next;
  }
  return true;
};

const isUnivalueListRecursive = (head, value = head.val) => {
  if (!head) return true;
  if (head.val !== value) return false;
  return isUnivalueListRecursive(head.next, value);
};

// Write a function, longestStreak, that takes in the head of a linked list as an argument.
// The function should return the length of the longest consecutive streak of the same value within the list.
const longestStreak = (head) => {
  let max = 0;
  let count = 0;
  let value = null;

  let node = head;
  while (node) {
    if (node.val === value) count++;
    else {
      value = node.val;
      count = 1;
    }
    if (count > max) max = count;
  }
};
