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
};
