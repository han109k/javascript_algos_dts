const BinarySearchTree = require("./main");
const Queue = require("../Queue/main");

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// Breadth-First-Search
function bfs(tree) {
  const queue = new Queue();
  queue.enqueue(tree.root);
  let data = [];
  while(queue.size > 0) {
    let node = queue.dequeue().val;
    data.push(node.val);
    if(node.left) queue.enqueue(node.left);
    if(node.right) queue.enqueue(node.right);
  }
  
  return data;
}

console.log(bfs(tree));
