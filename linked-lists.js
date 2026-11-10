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
};
