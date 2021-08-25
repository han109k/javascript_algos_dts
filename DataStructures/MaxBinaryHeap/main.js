class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    function bubbleUp(values) {
      let index = values.length - 1;
      let parentIndex = Math.floor((index - 1) / 2);
      while (index > 0 && values[parentIndex] < values[index]) {
        // swap
        [values[parentIndex], values[index]] = [
          values[index],
          values[parentIndex],
        ];
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
      }
    }

    bubbleUp(this.values);
  }

  extractMax() {
    // swap first and last value
    const length = this.values.length;
    [this.values[0], this.values[length - 1]] = [this.values[length - 1], this.values[0]];
    const max = this.values.pop();

    let n = 0;let swap = 0;let sinkDown = false;
    while (!sinkDown && this.values.length > 1) {
      let leftChildIdx = 2 * n + 1;
      let rightChildIdx = 2 * n + 2;

      if (
        this.values[n] < this.values[leftChildIdx] &&
        this.values[n] < this.values[rightChildIdx]
      ) {
        this.values[leftChildIdx] > this.values[rightChildIdx]
          ? (swap = leftChildIdx)
          : (swap = rightChildIdx);
      } else if (this.values[n] < this.values[leftChildIdx]) {
        swap = leftChildIdx;
      } else if (this.values[n] < this.values[rightChildIdx]) {
        swap = rightChildIdx;
      } else {
        sinkDown = !sinkDown;
      }
      // swap
      [this.values[n], this.values[swap]] = [this.values[swap], this.values[n]];
      n = swap;
    }

    return max;
  }

  print() {
    if(this.values.length === 0) {
      console.log("Heap is empty.");
      return;
    }
    console.log(this.values);
    console.log(this.values[0]);
    let maxIndex = Math.floor(this.values.length / 2);
    for (let i = 0; i < maxIndex; i++) {
      process.stdout.write(
        this.values[2 * i + 1] + " " + this.values[2 * i + 2] + " "
      );
      if (i % 2 === 0) {
        process.stdout.write("\n");
      }
    }
    process.stdout.write("\n");
  }
}

/**
 ** TESTING
 */

let heap = new MaxBinaryHeap();
heap.insert(100);
heap.insert(19);
heap.insert(36);
heap.insert(17);
heap.insert(12);
heap.insert(25);
heap.insert(80);
heap.insert(24);
heap.insert(105);
heap.print();

// extract max
console.log("Extract max : ", heap.extractMax());
heap.print();
console.log("Extract max : ", heap.extractMax());
heap.print();
console.log("Extract max : ", heap.extractMax());
heap.print();
console.log("Extract max : ", heap.extractMax());
heap.print();
console.log("Extract max : ", heap.extractMax());
heap.print();
console.log("Extract max : ", heap.extractMax());
heap.print();
console.log("Extract max : ", heap.extractMax());
heap.print();
console.log("Extract max : ", heap.extractMax());
heap.print();
console.log("Extract max : ", heap.extractMax());
heap.print();
console.log("Extract max : ", heap.extractMax());
heap.print();
