const PriorityQueue = require("../PriorityQueue/main");

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) this.adjacencyList[vtx] = [];
  }

  removeVertex(vtx) {
    for (let vertex in this.adjacencyList) {
      this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
        (v) => v.vertex !== vtx
      );
    }

    delete this.adjacencyList[vtx];
  }

  addEdge(vtx1, vtx2, weight) {
    this.addVertex(vtx1);
    this.addVertex(vtx2);
    this.adjacencyList[vtx1].push({ vertex: vtx2, weight });
    this.adjacencyList[vtx2].push({ vertex: vtx1, weight });
  }

  removeEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
      (v) => v.vertex !== vtx2
    );
    this.adjacencyList[vtx2] &&
      (this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
        (v) => v.vertex !== vtx1
      ));
  }

  print() {
    console.log(this.adjacencyList);
  }
}

function shortestPath(start, end) {
  const queue = new PriorityQueue();
  const previous = {};
  const distances = {};
  const visited = {};
  visited[start] = true;

  for (let vertex in graph.adjacencyList) {
    if (vertex === start) {
      distances[vertex] = 0;
      queue.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      queue.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  let path = []; let found = false;
  while (queue.values.length != 0 && !found) {
    let vertex = queue.dequeue();
    if (!(vertex === end)) {
      graph.adjacencyList[vertex].forEach(element => {
        if (!visited[element.vertex]) {
          let currVertex = element.vertex;

          // calculate distance from start for current neighbor
          let dstStart = element.weight;
          dstStart += distances[vertex];

          if (dstStart < distances[currVertex]) {
            // update new smallest distance
            distances[currVertex] = dstStart;
            previous[currVertex] = vertex;
            queue.enqueue(currVertex, dstStart);
          }
        }
      });
      visited[vertex] = true;

      // FOUND
    } else {
      path.push(end);
      while (previous[end]) {
        path.unshift(previous[end]);
        end = previous[end];
      }
      found = !found;
    }
  }

  return path;
}

/**
 **    Example Graph
 *
 *           4
 *       A ----- B
 *      /         \
 *  2  /           \ 3
 *    /   2      3  \
 *   C ---- D ------ E
 *     \    |      /
 *    4 \  1|    / 1
 *       \  |  /
 *          F
 */
let graph = new WeightedGraph();
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "F", 1);
graph.addEdge("D", "E", 3);
graph.addEdge("F", "E", 1);
// graph.print();

console.log("Shortest path from A to E : ", shortestPath("A", "E"));
