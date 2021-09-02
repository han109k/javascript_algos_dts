const Graph = require("./main");
const Stack = require("../Stack/main");
const Queue = require("../Queue/main");

let g = new Graph();

function depthFirstRecursive(node) {

  const list = [];
  const visited = {};

  (function dfs(node) {
    if(!node) return;
    visited[node] = true;
    list.push(node);
    for(let vertex of g.adjacencyList[node]) {
      // if not visited then call helper recursively
      if(!visited[vertex]) {
        dfs(vertex);
      }
    }
  })(node);

  return list;

}

function depthFirstIterative(node) {

  const stack = new Stack();
  const list = [];
  const visited = {};

  stack.push(node); visited[node] = true;
  while(stack.size != 0) {
    let vertex = stack.pop().val;
    list.push(vertex);
    
    g.adjacencyList[vertex].forEach(neighbor => {
      if(!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }

  return list;
}

function breadthFirst(node) {
  const queue = new Queue();
  const list = [];
  const visited = {};

  queue.enqueue(node); visited[node] = true;
  while(queue.size != 0) {
    let vertex = queue.dequeue().val;
    list.push(vertex);
    g.adjacencyList[vertex].forEach(neighbor => {
      if(!visited[neighbor]) {
        visited[neighbor] = true;
        queue.enqueue(neighbor);
      }
    })
  }

  return list;
}

//* GRAPH
//
//       A
//     /   \
//    B     C
//    |     |
//    D --- E
//     \   /
//       F

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

g.print();

console.log("DFS : ", depthFirstRecursive("A"));
console.log("DFS : ", depthFirstIterative("A"));
console.log("BFS : ", breadthFirst("A"));