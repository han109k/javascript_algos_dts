class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// Min Binary Heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  
  enqueue(val, priority) {
    
    /*
    * If there will be a duplicate first remove it current node
    * after that add a new node and push it to the list. Lastly, re-bubble up
    */ 
    // this.values.map((node, index) => {
    //   if(node.val === val) {
    //     this.values.splice(index, 1);
    //   }
    // })
    
    let node = new Node(val, priority);
    this.values.push(node);    

    function bubbleUp(values) {
      let index = values.length - 1;
      let parentIndex = Math.floor((index - 1) / 2);
      while (index > 0 && values[parentIndex].priority > values[index].priority) {
        // swap
        [values[parentIndex],values[index]] = [values[index],values[parentIndex]];
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
      }
    }

    bubbleUp(this.values);
  }

  dequeue() {
    return this.values.shift().val;
  }

  print() {
    if(this.values.length === 0) {
      console.log("Queue is empty.");
      return;
    }
    for(let values of this.values) {
      console.log(values.val + " Priority : " + values.priority);
    }
    console.log();
  }
}

module.exports = PriorityQueue;

/**
 ** TESTING
 */

// let pQueue = new PriorityQueue();
// pQueue.enqueue("Headache", 5);
// pQueue.enqueue("Concussion", 1);
// pQueue.enqueue("Fever", 3);
// pQueue.enqueue("Flu", 2);
// pQueue.print();

// console.log(pQueue.dequeue());
// pQueue.print();

// let pQueue = new PriorityQueue();
// pQueue.enqueue("B", 95);
// pQueue.enqueue("C", 96);
// pQueue.enqueue("D", 97);
// pQueue.enqueue("E", 98);
// pQueue.enqueue("F", 99);
// pQueue.print();

// pQueue.enqueue("B", 2);
// pQueue.print();
// pQueue.enqueue("C", 4);
// pQueue.print();
// pQueue.enqueue("D", 3);
// pQueue.print();
// pQueue.enqueue("E", 5);
// pQueue.print();
// pQueue.enqueue("F", 9);
// pQueue.print();