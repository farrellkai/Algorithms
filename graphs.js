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
  return graph;
};

// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
// The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
// TRY THIS AGAIN!!!
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const set = new Set();
  if (findPath(graph, nodeA, nodeB, set)) return true;
  return false;
};

const findPath = (graph, nodeA, nodeB, set) => {
  if (nodeA === nodeB) return true;
  if (!set.has(nodeA)) {
    set.add(nodeA);
    for (node of graph[nodeA]) {
      if (findPath(graph, node, nodeB, set)) return true;
    }
  }
};

// Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
// The function should return the number of connected components within the graph.
const connectedComponentsCount = (graph) => {
  const set = new Set();
  let count = 0;
  for (vert in graph) {
    if (!set.has(+vert)) {
      count += traverseComponents(graph, vert, set);
    }
  }
  return count;
};

const traverseComponents = (graph, node, set) => {
  if (!set.has(+node)) {
    set.add(+node);
    for (point of graph[node]) {
      traverseComponents(graph, point, set);
    }
  }
  return 1;
};

// Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
// The function should return the size of the largest connected component in the graph.
const largestComponent = (graph) => {
  let max = 0;
  const set = new Set();
  for (node in graph) {
    if (!set.has(+node)) {
      const size = componentSizeCount(graph, node, set);
      if (size > max) max = size;
    }
  }
  return max;
};

const componentSizeCount = (graph, node, set) => {
  if (!set.has(+node)) {
    set.add(+node);
    let count = 1;
    for (vert of graph[node]) {
      count += componentSizeCount(graph, vert, set);
    }
    return count;
  }
  return 0;
};

// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
// The function should return the length of the shortest path between A and B.
// Consider the length as the number of edges in the path, not the number of nodes.
// If there is no path between A and B, then return -1. You can assume that A and B exist as nodes in the graph.
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const set = new Set();

  const queue = [[nodeA, 0]];
  while (queue[0]) {
    const [node, lvl] = queue.shift();
    if (node === nodeB) return lvl;
    for (el of graph[node]) {
      if (!set.has(el)) {
        set.add(el);
        queue.push([el, lvl + 1]);
      }
    }
  }
  return -1;
};

// Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land.
// The function should return the number of islands on the grid.
// An island is a vertically or horizontally connected region of land.
const islandCount = (grid) => {
  const set = new Set();
  let count = 0;
  let rowIndex = 0;
  while (rowIndex < grid.length) {
    let collumnIndex = 0;
    while (collumnIndex < grid[rowIndex].length) {
      if (
        !set.has('' + rowIndex + collumnIndex) &&
        grid[rowIndex][collumnIndex] === 'L'
      ) {
        islandTraverse(grid, rowIndex, collumnIndex, set);
        count++;
      }
      collumnIndex++;
    }
    rowIndex++;
  }
  return count;
};

const islandTraverse = (grid, rowIndex, collumnIndex, set) => {
  if (grid[rowIndex][collumnIndex] === 'W') return;
  if (!set.has('' + rowIndex + collumnIndex)) {
    set.add('' + rowIndex + collumnIndex);
    if (rowIndex > 0) islandTraverse(grid, rowIndex - 1, collumnIndex, set);
    if (rowIndex < grid.length - 1)
      islandTraverse(grid, rowIndex + 1, collumnIndex, set);
    if (collumnIndex > 0) islandTraverse(grid, rowIndex, collumnIndex - 1, set);
    if (collumnIndex < grid[rowIndex].length - 1)
      islandTraverse(grid, rowIndex, collumnIndex + 1, set);
  }
};

// Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land.
// The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.
// You may assume that the grid contains at least one island.
const minimumIsland = (grid) => {
  const set = new Set();
  let min = Infinity;

  let rowI = 0;
  while (rowI < grid.length) {
    let collumnI = 0;
    while (collumnI < grid[rowI].length) {
      if (!set.has('' + rowI + collumnI) && grid[rowI][collumnI] === 'L') {
        const size = islandSize(grid, rowI, collumnI, set);
        if (size < min) min = size;
      }
      collumnI++;
    }
    rowI++;
  }
  return min;
};

const islandSize = (grid, rowI, collumnI, set) => {
  if (set.has('' + rowI + collumnI) || grid[rowI][collumnI] === 'W') return 0;
  set.add('' + rowI + collumnI);
  const north = rowI > 0 ? islandSize(grid, rowI - 1, collumnI, set) : 0;
  const south =
    rowI < grid.length - 1 ? islandSize(grid, rowI + 1, collumnI, set) : 0;
  const west = collumnI > 0 ? islandSize(grid, rowI, collumnI - 1, set) : 0;
  const east =
    collumnI < grid[rowI].length - 1
      ? islandSize(grid, rowI, collumnI + 1, set)
      : 0;
  return 1 + north + south + west + east;
};

// Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column.
// In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots.
// The function should return a number representing the length of the shortest path from the starting position to a carrot.
// You may move up, down, left, or right, but cannot pass through walls (X).
// If there is no possible path to a carrot, then return -1.
const closestCarrot = (grid, startRow, startCollumn) => {
  const set = new Set();
  const queue = [[startRow, startCollumn, 0]];
  while (queue[0]) {
    const [rowI, collumnI, lvl] = queue.shift();
    if (grid[rowI][collumnI] === 'C') return lvl;
    if (!set.has('' + rowI + collumnI) && grid[rowI][collumnI] !== 'X') {
      set.add('' + rowI + collumnI);
      const north = rowI > 0 ? [rowI - 1, collumnI, lvl + 1] : null;
      const south =
        rowI < grid.length - 1 ? [rowI + 1, collumnI, lvl + 1] : null;
      const west = collumnI > 0 ? [rowI, collumnI - 1, lvl + 1] : null;
      const east =
        collumnI < grid[rowI].length - 1 ? [rowI, collumnI + 1, lvl + 1] : null;
      if (north) queue.push(north);
      if (south) queue.push(south);
      if (west) queue.push(west);
      if (east) queue.push(east);
    }
  }
  return -1;
};

// Write a function, bestBridge, that takes in a grid as an argument. The grid contains water (W) and land (L).
// There are exactly two islands in the grid. An island is a vertically or horizontally connected region of land.
// Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.
const bestBridge = (grid) => {
  const island1 = new Set();
  const island2 = new Set();

  let min = Infinity;

  let rowI = 0;
  while (rowI < grid.length) {
    let collumnI = 0;
    while (collumnI < grid[rowI].length) {
      const coordinate = '' + rowI + collumnI;
      if (grid[rowI][collumnI] === 'L') {
        if (island1.size === 0) mapIsland(grid, rowI, collumnI, island1);
        else if (!island1.has(coordinate))
          mapIsland(grid, rowI, collumnI, island2);
      }
      collumnI++;
    }
    rowI++;
  }

  rowI = 0;
  while (rowI < grid.length) {
    let collumnI = 0;
    while (collumnI < grid[rowI].length) {
      const coordinate = '' + rowI + collumnI;
      const visited = new Set();
      if (island1.has(coordinate)) {
        const size = countBridge(grid, rowI, collumnI, visited, island2);
        if (size < min) min = size;
      }
      collumnI++;
    }
    rowI++;
  }
  return min;
};

const countBridge = (grid, startRowI, startCollumnI, visited, island2) => {
  const queue = [[startRowI, startCollumnI, 0]];
  while (queue[0]) {
    const [rowI, collumnI, lvl] = queue.shift();
    console.log(rowI, collumnI, lvl);
    const coordinate = '' + rowI + collumnI;
    if (island2.has(coordinate)) return lvl - 1;
    if (!visited.has(coordinate)) {
      visited.add(coordinate);
      if (rowI > 0) queue.push([rowI - 1, collumnI, lvl + 1]);
      if (rowI < grid.length - 1) queue.push([rowI + 1, collumnI, lvl + 1]);
      if (collumnI > 0) queue.push([rowI, collumnI - 1, lvl + 1]);
      if (collumnI < grid[rowI].length - 1)
        queue.push([rowI, collumnI + 1, lvl + 1]);
    }
  }
};

const mapIsland = (grid, rowI, collumnI, set) => {
  const coordinate = '' + rowI + collumnI;
  if (grid[rowI][collumnI] === 'W' || set.has(coordinate)) return;
  set.add(coordinate);
  if (rowI > 0) mapIsland(grid, rowI - 1, collumnI, set);
  if (rowI < grid.length - 1) mapIsland(grid, rowI + 1, collumnI, set);
  if (collumnI > 0) mapIsland(grid, rowI, collumnI - 1, set);
  if (collumnI < grid[rowI].length - 1)
    mapIsland(grid, rowI, collumnI + 1, set);
};

// Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph.
// The function should return a boolean indicating whether or not the graph contains a cycle.
const hasCycle = (graph) => {
  for (key in graph) {
    if (traverse(graph, key, new Set())) return true;
  }
  return false;
};

const traverse = (graph, node, set) => {
  if (set.has(node)) return true;
  set.add(node);
  for (child of graph[node]) {
    if (traverse(graph, child, set)) return true;
  }
  set.delete(node);
};

// Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments.
// Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B.
// The function should return a boolean indicating whether or not it is possible to complete all courses.
const prereqsPossible = (num, prereqs) => {
  const hasPrereqs = new Set();
  const graph = buildGraphIndentifyPrereqs(prereqs, hasPrereqs);
  const courses = new Set();

  for (node in graph) {
    if (!hasPrereqs.has(+node)) {
      if (!courses.has(+node)) courses.add(+node);
      takeCourses(graph, node, hasPrereqs);
      if (courses.size === num) return true;
    }
  }
  return false;
};

const takeCourses = (graph, node, set) => {
  for (course of graph[node]) {
    if (!set.has(+course)) {
      set.add(+course);
      takeCourses(graph, course, set);
    }
  }
};

const buildGraphIndentifyPrereqs = (edges, set) => {
  const graph = {};
  for (path of edges) {
    const [vert1, vert2] = path;
    if (!set.has(+vert2)) set.add(+vert2);
    graph[vert1] ? graph[vert1].push(vert2) : (graph[vert1] = [vert2]);
    graph[vert2] ? graph[vert2].push(vert1) : (graph[vert2] = [vert1]);
  }
  return graph;
};
