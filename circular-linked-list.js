/**
 *  CIRCULAR LINKED LIST
 */

const { LinkedList } = require('./linked-list');
const { Node } = require('./linked-list');



// Circular Linked List
class CircularLinkedList extends LinkedList {
  constructor() {
    super();
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index == 0) {
        if (this.head == undefined) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          this.head = node;
        }
      } else if (index == this.count) {
        const previous = this.getElementAt(index - 1);
        previous.next = node;
        node.next = this.head;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = node;
        node.next = current;
      }
      this.count++;
      return this;
    }
    return undefined;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      if (this.isEmpty()) {
        return undefined;
      }
      let curr = this.head;
      if (index == 0) {
        this.head = curr.next;
      } else if (index == this.count - 1) {
        const previous = this.getElementAt(index - 1);
        curr = previous.next;
        previous.next = this.head;
      } else {
        const previous = this.getElementAt(index - 1);
        curr = previous.next;
        previous.next = curr.next;
      }
      this.count--;
      return curr.next;
    }
    return undefined;
    }
    
  push(element) {
    let node = new Node(element);
    let current = this.head;
    if (current == undefined) {
      this.head = node;
      node.next = this.head;
    } else {
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
      node.next = this.head;
    }
    this.count++;
    return this;
  }
}


const circular_list = new CircularLinkedList();

console.log(`---------Circular Linked List-----------`);

console.log(circular_list.isEmpty());

console.log(circular_list.size());


circular_list.push(23);
circular_list.insert(23, 1);
circular_list.insert(54, 2);
circular_list.insert(16, 3);

console.log(circular_list.size());

console.log(circular_list.toString());

circular_list.removeAt(2);

console.log(circular_list.toString());
