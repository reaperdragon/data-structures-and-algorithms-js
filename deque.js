/**
 * DEQUE
 * 
 *   addFront(element) : This method adds new element at the front of the deque.
 *   addBack(element) : This method adds new element at the back of the deque.
 *   removeFront() : This method removes first element from the deque.
 *   removeBack() : This method removes last element from the deque.
 *   peekFront() : This method returns the first element from the deque.
 *   peekBack() : This method returns the last element from the deque.
 * 
 */

class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.obj = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      return this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.obj[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.obj[i] = this.obj[i - 1];
      }
      this.count--;
      this.lowestCount = 0;
      this.obj[0] = element;
    }
  }

  addBack(element) {
    this.obj[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    let result = this.obj[this.lowestCount];
    delete this.obj[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    let result = this.obj[this.count - 1];
    delete this.obj[this.count - 1];
    this.count--;
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.obj[this.count - 1];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.obj[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.obj = {};
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objStr = `${this.obj[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objStr = `${objStr},${this.obj[i]}`;
    }
    return objStr;
  }
}

const deque = new Deque();
console.log(deque.isEmpty()); // true

deque.addBack('Steve');
deque.addBack('Sam');

console.log(deque.toString()); // Steve,Sam

deque.addBack('Bucky');

console.log(deque.toString()); //Steve,Sam,Bucky
console.log(deque.size()); // 3
console.log(deque.isEmpty()); // false

deque.removeFront();

console.log(deque.toString()); // Sam,Bucky

deque.removeBack();

console.log(deque.toString()); // Sam

deque.addFront('Steve');

console.log(deque.toString()); // Steve,Sam
