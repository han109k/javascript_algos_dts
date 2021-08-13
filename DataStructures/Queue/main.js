class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //* Enqueue - Add item to queue (add to end of list)
  enqueue(val) {
    let node = new Node(val);
    if(!this.first) {
      this.first = node; this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }

  //* Dequeue - Remove item from queue (remove from begining of the list)
  dequeue() {
    if(!this.first) return null;
    let deletedNode = this.first;
    this.first = deletedNode.next;
    this.size--;
    deletedNode.next = null;
    if(this.size === 0) this.last = null;
    return deletedNode;
  }

  print() {
    if (!this.first) {
      console.log("Queue is empty");
    } else {
      let curr = this.first;
      process.stdout.write("Top -> " + curr.val);
      while (curr.next != null) {
        curr = curr.next;
        process.stdout.write(" " + curr.val);
      }
      process.stdout.write(" <- Bottom | Size :" + this.size + "\n");
    }
  }
}

module.exports = Queue;

/**
 ** TESTING
 */
// let queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(2);
// queue.print();

// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.print();