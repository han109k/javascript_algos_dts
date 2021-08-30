/**
 * Undirected Graph
 */
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) this.adjacencyList[vtx] = [];
  }

  removeVertex(vtx) {
    for (let vertex in this.adjacencyList) {
      this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
        (v) => v !== vtx
      );
    }
    
    delete this.adjacencyList[vtx];
  }

  addEdge(vtx1, vtx2) {
    this.addVertex(vtx1);
    this.addVertex(vtx2);
    this.adjacencyList[vtx1].push(vtx2);
    this.adjacencyList[vtx2].push(vtx1);
  }

  removeEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
      (v) => v !== vtx2
    );
    this.adjacencyList[vtx2] && (this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
      (v) => v !== vtx1
    ));
  }

  print() {
    console.log(this.adjacencyList);
  }
}

module.exports = Graph;

/**
 ** TESTING
 */

// let graph = new Graph();
// graph.addVertex("Tokyo");
// graph.addVertex("Texas");
// graph.addVertex("Australia");
// graph.addVertex("Los Angeles");
// graph.print();

// graph.addEdge("Tokyo", "Texas");
// graph.addEdge("Tokyo", "Los Angeles");
// graph.addEdge("Tokyo", "Australia");
// graph.addEdge("Texas", "Australia");
// graph.addEdge("Texas", "Los Angeles");
// graph.print();

// graph.removeEdge("Tokyo", "Texas");
// graph.print();

// graph.removeVertex("Tokyo");
// graph.print();
