class Vertex {
  constructor(label) {
    this.label = label;
    this.adj = [];
    this.isMarked = false;
  }
}
class Graph {
  constructor(vertices) {
    this.vertices = {};
    vertices.forEach(vert => {
      this.vertices[vert] = new Vertex(vert);
    });
  }
  addEdge(v, w) {
    this.vertices[v].adj.push(this.vertices[w]);
    this.vertices[w].adj.push(this.vertices[v]);
  }

  getAdjNodes(v) {
    return this.vertices[v].adj;
  }
  displayGraph() {
    Object.keys(this.vertices).forEach(vert => {
      this.vertices[vert].isMarked = false;
      const adjArr = this.vertices[vert].adj.map(a => a.label);
      console.log(`${vert} -> ${adjArr}`);
    });
  }

  dfs(node) {
    // Depth First Search is Recursive
    this.vertices[node].isMarked = true;
    console.log("Visiting Node: " + node);
    this.vertices[node].adj.forEach(v => {
      if (!v.isMarked) {
        this.dfs(v.label);
      }
    });
  }

  bfs(node) {
    console.log(
      `=======================
                BFS
            ======================`
    );
    let queue = [];
    this.vertices[node].isMarked = true;
    queue.push(this.vertices[node]);
    while (queue.length > 0) {
      let curr = queue.shift();
      console.log("Visiting: " + curr.label);
      curr.adj.forEach(vert => {
        if (!vert.isMarked) {
          vert.isMarked = true;
          queue.push(vert);
        }
      });
    }
  }
}

const graph = new Graph(["A", "B", "C", "D", "E", "F", "G", "X"]);
graph.addEdge("A", "B");
graph.addEdge("A", "X");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("C", "F");
graph.addEdge("B", "G");

graph.displayGraph();

graph.dfs("X");

graph.displayGraph();

graph.bfs("A");
