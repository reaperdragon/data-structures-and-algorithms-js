/**
 *  LINKED LIST
 *
 *  push(element) : This method adds new element to the end of the list.
 *
 *  insert(element,position) : This method inserts a new element at a specified position in the list.
 *
 *  getElement(index) : This method returns the element of a specific position in the list.If element not exists in the it returns undefined.
 *
 *  remove(element) : This method removes an element from the list.
 *
 *  indexOf(element) : This method returns the index of the element in the list. If element not exists then it returns -1.
 *
 *  removeAt(position) : This method removes an items from a specified position in the list.
 *
 *  isEmpty() : This method returns true if the linked list does not contain any element, and false if the size list is bigger than 0.
 *
 *  size() : This method returns the number of elements the linked list contains.
 *
 */

function defaultEquals(a, b) {
  return a === b;
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  constructor(equalsFun = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFun = equalsFun;
  }

  push(element) {
    const node = new Node(element);
    let currentNode;
    if (this.head == null) {
      this.head = node;
    } else {
      currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.count++;
  }

  removeAt(index) {
    // check if the out-of-bounds
    if (index >= 0 && index < this.count) {
      let current = this.head;

      //removing first item
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }

        //link previous with current's next
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFun(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return "";
    }
    let objStr = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objStr = `${objStr},${current.element}`;
      current = current.next;
    }
    return objStr;
  }
}

module.exports = {
  Node,
  LinkedList,
};

const list = new LinkedList();

console.log(list.isEmpty()); // true

list.push(15);
list.push(10);
list.push(56);
list.push(35);
list.push(26);
list.push(34);

console.log(list.size()); // 6

list.insert(22, 4);

console.log(list.toString()); //  15,10,56,35,22,26,34

list.remove(56);

console.log(list.toString()); //  15,10,35,22,26,34

list.removeAt(2);

console.log(list.toString()); // 15,10,22,26,34

console.log(list.getHead()); // head : 15

console.log(list.getElementAt(3)); // element : 26

console.log(list.toString()); // 15,10,22,26,34
