class Node{
  constructor(val){
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

class BinarySearchTree{
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    let completed = false;
    if(this.root === null) this.root = node;
    else {
      let curr = this.root;
      while(!completed) {
        if(curr.val > val) {
          if(curr.left) curr = curr.left;
          else {
            curr.left = node; completed = true;
          }
        } else if(curr.val < val){
          if(curr.right) curr = curr.right;
          else {
            curr.right = node; completed = true;
          }
        } else {
          console.log(`Value ${val} exists in tree`);
          return undefined;
        }
      }
    }
    return this;
  }

  find(val) {
    if(this.root === null) return false;
    else {
      let curr = this.root;
      while(true) {
        if(curr.val > val) curr = curr.left;
        else if(curr.val < val) curr = curr.right;
        else return true;

        if(curr === null) return false;
      }
    }
  }
}

module.exports =  BinarySearchTree;

/**
 ** TESTING
 */
// const tree = new BinarySearchTree();
// /**
//  *      10
//  *    5    13
//  *  2 7   11  16
//  */
// tree.insert(10);
// tree.insert(5);
// tree.insert(13);
// tree.insert(2);
// tree.insert(7);
// tree.insert(11);
// tree.insert(16);
// console.log(tree);

// console.log(tree.find(7));  // true
// console.log(tree.find(26));  // false
// console.log(tree.find(6));  // false