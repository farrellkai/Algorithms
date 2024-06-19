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
