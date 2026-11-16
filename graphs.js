// Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst).
// The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  for (node of graph[src]) {
    if (hasPath(graph, node, dst)) return true;
  }
  return false;
};

// buildGraph helper function.
const buildGraph = (edges) => {
  const graph = {};
  for (path of edges) {
    const [vert1, vert2] = path;
    graph[vert1] ? graph[vert1].push(vert2) : (graph[vert1] = [vert2]);
    graph[vert2] ? graph[vert2].push(vert1) : (graph[vert2] = [vert1]);
  }
};

// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
// The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
const undirectedPath = (edges, nodeA, nodeB) => {};
