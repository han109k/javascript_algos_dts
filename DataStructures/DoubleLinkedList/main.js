class Node {
  constructor(val) {
    this.prev = null;
    this.next = null;
    this.val = val;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //? Instance Methods
  //* Push - add an item to end
  push(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  //* Pop - remove an item from end
  pop() {
    if(!this.head) return undefined;
    let deletedNode = this.tail;
    if(this.length === 1) {  
      this.head = null; this.tail = null;
    } else {
      this.tail = deletedNode.prev;
      this.tail.next = null;
      deletedNode.prev = null;
    }
    this.length--;
    return deletedNode;
  }

  //* Shift - remove an item from begining
  shift() {
    if(!this.head) return undefined;
    let deletedNode = this.head;
    this.head = deletedNode.next;
    deletedNode.next = null;
    this.length--;
    this.length > 0 ? this.head.prev = null : this.tail = null;
    return deletedNode;
  }

  //* Unshift - insert an item to the begining of the list
  unshift(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = node; this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  //* Get - get item at the index
  get(index) {
    if(index < 0 || index+1 > this.length) return null;
    let curr = null;
    // If index closer to the tail we can traverse back to index
    if(index < Math.floor(this.length / 2)) {
      curr = this.head;
      for(let i = 0; i < index; i++) {
        curr = curr.next;
      }
    } else {
      curr = this.tail;
      for(let i = this.length - 1; i > index; i--) {
        curr = curr.prev;
      }
    }
    
    return curr;
  }

  //* Set - update item at the index
  set(index, val) {
    let node = this.get(index);
    if(node) {
      node.val = val;
      return true;
    } 
    return false;
  }

  //* Insert - insert an item to index
  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);
    let prev = this.get(index - 1);
    let aft = prev.next;
    let node = new Node(val);
    node.next = aft, aft.prev = node;
    prev.next = node, node.prev = prev;
    this.length++;
    return true;
  }
  

  //* Remove - remove an item from index
  remove(index) {
    if(index < 0 || index+1 > this.length) return false;
    if(index === 0) return this.shift();
    if(index === this.length) return this.pop();
    let deletedNode = this.get(index);
    let prev = deletedNode.prev;
    let aft = deletedNode.next;
    prev.next = aft, aft.prev = prev;
    deletedNode.prev = null, deletedNode.next = null;
    this.length--;
    return deletedNode;
  }

  //* Reverse - reverse list items
  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;
    
    let prev = null, next;
    for(let i = 0; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;
      curr.prev = next;
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
        // console.log(curr.val);
        process.stdout.write(" " + curr.val);
      }
      process.stdout.write(" <- Tail\n");
    }
  }
}

/**
 ** TESTING
 */

let list = new DoubleLinkedList();
console.log(list);

// push
list.push(5);
list.push(2);
list.push(10);
list.push(7);
list.print();

// pop
console.log(list.pop());
list.print();

// shift
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
list.print();

// unshift
console.log(list.unshift(4));
console.log(list.unshift(6));
console.log(list.unshift(9));
console.log(list.unshift(3));
list.print();

// get
console.log("Get item at index 2: ", list.get(2));
console.log("Get item at index 3: ", list.get(3));
console.log("Get item at index 5: ", list.get(5));
list.print();

// set
console.log("Set item at index 1 to 8: ", list.set(1, 8));
list.print();

// insert
console.log("Insert 44 to index 3: ", list.insert(3,44));
list.print();

// remove
console.log("Remove index 2: ", list.remove(2));
list.print();

// Reversing list
list = list.reverse();
list.print();