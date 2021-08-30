class Node{ 
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  //* Push - add an item to begining of the list (stack)
  push(val) {
    let node = new Node(val);
    if(!this.top){
      this.top = node; this.bottom = this.top;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.size++;
    return this;
  }

  //* Pop - remove an item from begining of the list (stack)
  pop() {
    if(!this.top) return undefined;
    let deletedNode = this.top;
    this.top = this.top.next;
    this.size--;
    deletedNode.next = null;
    if(this.size === 0) this.bottom = null;
    return deletedNode;
  }

  print() {
    if (!this.top) {
      console.log("Stack is empty");
    } else {
      let curr = this.top;
      process.stdout.write("Top -> " + curr.val);
      while (curr.next != null) {
        curr = curr.next;
        process.stdout.write(" " + curr.val);
      }
      process.stdout.write(" <- Bottom | Size :" + this.size + "\n");
    }
  }
}

module.exports = Stack;

/**
 ** TESTING
 */

// let stack = new Stack();
// // push
// stack.push(5);
// stack.push(3);
// stack.push(2);
// stack.print();

// // pop
// stack.pop();
// stack.pop();
// stack.print();