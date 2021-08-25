class HashTable {
  // Default size is 37 (especially a prime number is selected!)
  constructor(size = 37) {
    this.keyMap = new Array(size);
  }

  // Hash Function
  _hash(key) {
    if (!(typeof key === "string")) {
      key = key + "";
    }
    let total = 0;
    let prime = 17;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0);
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  // Get value from hash table based on a key
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let pair of this.keyMap[index]) {
        if (pair[0] === key) return pair[1];
      }
    }
    return undefined;
  }

  // !!! Duplicate keys are allowed
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  /**
   * Returns an array of keys in the table
   */
  keys() {
    let arr = [];
    this.keyMap.map((val) => {
      val.map((pair) => {
        arr.push(pair[0]);
      });
    });
    return arr;
  }

  /**
   * Returns an array of values in the table
   */
  values() {
    let arr = [];
    this.keyMap.map((val) => {
      val.map((pair) => {
        arr.push(pair[1]);
      });
    });
    return arr;
  }

  list() {
    // console.log(this.keyMap);
    this.keyMap.map((val, index) => {
      console.log(index, val);
    });
  }
}

/**
 ** TESTING
 */

let map = new HashTable(10);
map.set("Red", "#FF0000");
map.set("Green", "#00FF00");
map.set("Blue", "#0000FF");
map.set("Yellow", "#FFFF00");
map.set(1, "Han");
map.list();

console.log(map.get("Blue"));
console.log(map.get(1));

console.log("Keys : ", map.keys());
console.log("Values : ", map.values());
