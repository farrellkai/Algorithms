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
};
