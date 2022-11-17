// create the Queue class with two methods to remove and add an element
class Queue {
  constructor(arr = []) {
    this.arr = arr;
  }

  addToQueue(inputNum) {
    return this.arr.push(inputNum);
  }

  removeFromQueue() {
    return this.arr.shift();
  }
}

module.exports = Queue;
