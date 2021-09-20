class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //? Instance Methods
  //* Push - add an item to end
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //* Pop - remove an item from end
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    let prev = this.head;
    while (prev.next != this.tail) {
      prev = prev.next;
    }
    let temp = prev.next;
    prev.next = null;
    this.tail = prev;
    this.length--;
    return temp;
  }

  //* Shift - remove an item from begining
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    if (this.length === 1) this.tail = this.head;
    return temp.val;
  }

  //* Unshift - insert an item to the begining of the list
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  //* Get - get item at the index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let i = 0;
    while (i != index) {
      current = current.next;
      i++;
    }
    return current;
  }

  //* Set - update item at the index
  set(val, index) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  //* Insert - insert an item to index
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let prev = this.get(index - 1);
    let node = new Node(val);
    node.next = prev.next;
    prev.next = node;
    this.length++;
    return true;
  }

  //* Remove - remove an item from index
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop(val);
    let prev = this.get(index - 1);
    let del = prev.next;
    prev.next = del.next;
    this.length--;
    return del;
  }

  //* Rotate - rotates the list by some number
  rotate(delimiter) {
    delimiter = delimiter % this.length;
    if(delimiter < 0) {
      delimiter = this.length + delimiter;
    }
    
    if(delimiter !== 0) {  
      let prev = this.head;
      for(let i = 0; i < delimiter - 1; i++) {
        prev = prev.next;
      }
      this.tail.next = this.head;
      this.head = this.get(delimiter);
      this.tail = this.get(this.length-1);
      prev.next = null;
    }

    return this;
  }

  //* Reverse - reverse list items
  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    let prev = null, next;
    for (let i = 0; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return this;
  }

  print() {
    if (!this.head) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      process.stdout.write("Head -> " + curr.val);
      while (curr.next != null) {
        curr = curr.next;
        process.stdout.write(" " + curr.val);
      }
      process.stdout.write(" <- Tail\n");
    }
  }
}

/**
 ** TESTING
 */

let list = new SingleLinkedList();
list.push(5);
list.push(4);
list.push(2);
list.push(7);
list.print();

list = list.rotate(2);
list = list.rotate(-1);
list.print();

// console.log("pop: ", list.pop());
// console.log(list.print());

// console.log("shift: ", list.shift());
// console.log("shift: ", list.shift());
// console.log(list.print());

// console.log("unshift: 5", list.unshift(5));
// console.log("unshift: 5", list.unshift(12));
// console.log("unshift: 8", list.unshift(8));
// console.log(list.print());
// console.log("Get index 1: ", list.get(1));
// console.log("Set index 1 to 11: ", list.set(11, 1));
// console.log("Set index 5 to 23: ", list.set(23, 5));
// console.log(list.print());

// console.log("insert 37 to index 2: ", list.insert(37, 2));
// console.log(list.print());
// console.log("insert 4 to index 5: ", list.insert(4, 5));
// console.log(list.print());

// console.log("remove index 4: ", list.remove(4));
// console.log(list.print());
// console.log("remove index 3: ", list.remove(3));
// console.log(list.print());
// console.log("remove index 2: ", list.remove(2));
// console.log(list.print());
// console.log("remove index 4: ", list.remove(4));
// console.log(list.print());
// console.log("remove index 1: ", list.remove(1));
// console.log(list.print());
// console.log("remove index 0: ", list.remove(0));
// console.log(list.print());
// console.log("remove index 0: ", list.remove(0));
// console.log(list.print());  // empty

// list.push(37);
// list.push(27);
// list.push(32);
// list.push(71);
// list.print();
// // Reversing list
// list = list.reverse();
// list.print();