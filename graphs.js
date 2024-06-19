//has path function depth first
const hasPathDepth = (graph, start, fin) => {
  //base case: if start matches fin return true
  if (start === fin) return true;
  //iterate through graph at index start
  for (let el of graph[start]) {
    //recursive case: if hasPathDepth with current element passed into start is true return true
    if (hasPathDepth(graph, el, fin) === true) return true;
  }
  return false;
};

//has path function bredth first
const hasPathBredth = (graph, start, fin) => {
  //declare variable 'queue' assign to array containing value of graph at index of start
  const queue = [graph[start]];
  //itereate through elements in queue
  while (queue.length) {
    //declare variable 'cur' assign to first element in queue and remove
    const cur = queue.shift();
    //iterate through elements in cur array
    for (let el of cur) {
      //if el matches fin return true
      if (el === fin) return true;
      //push graph at index of el onto queue
      queue.push(graph[el]);
    }
  }
  return false;
};

//test cases
const graph1 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

const graph2 = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],
};

console.log(hasPathDepth(graph1, 'f', 'k'));
console.log(hasPathDepth(graph1, 'k', 'j'));
console.log(hasPathDepth(graph1, 'i', 'h'));
console.log(hasPathDepth(graph2, 'v', 'w'));
console.log(hasPathDepth(graph2, 'v', 'z'));
