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
  }
}

let pQueue = new PriorityQueue();
pQueue.enqueue("Headache", 5);
pQueue.enqueue("Concussion", 1);
pQueue.enqueue("Fever", 3);
pQueue.enqueue("Flu", 2);
pQueue.print();

console.log(pQueue.dequeue());
pQueue.print();