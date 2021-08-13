const BinarySearchTree = require("./main");

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//* DFS - Pre-Order
function preOrder(node) {
  let data = [];

  function traverse(node) {
    data.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(node);

  return data;
}

//* DFS - Post-Order
function postOrder(node) {
  let data = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    data.push(node.val);
  }

  traverse(node);

  return data;
}

//* DFS - In-Order
function inOrder(node) {
  let data = [];

  function traverse(node) {
    node.left && traverse(node.left);
    data.push(node.val);
    node.right && traverse(node.right);
  }

  traverse(node);

  return data;
}

/**
 ** TESTING
 */

console.log("PreOrder : ", preOrder(tree.root));
console.log("PostOrder : ", postOrder(tree.root));
console.log("InOrder : ", inOrder(tree.root));
