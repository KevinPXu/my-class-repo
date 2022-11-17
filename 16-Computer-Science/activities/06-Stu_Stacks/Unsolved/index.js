// create the Stack class with two methods to remove and add an element
class Stack {
  constructor(arr = []) {
    this.arr = arr;
  }

  pushToStack(el) {
    return this.arr.push(el);
  }

  popFromStack() {
    return this.arr.pop();
  }
}

module.exports = Stack;
