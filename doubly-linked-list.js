/**
 *  DOUBLY LINKED LIST
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
 *  size() : This method returns the number of elements the doubly linked list contains.
 * 
 * reverse() : Reverses the order of elements in the doubly linked list.
 *
 */

class DoublyLinkedList {
  constructor() {
    this.nodes = [];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.nodes.length;
  }

  getHead() {
    return this.head;
  }

  tail() {
    return this.size ? this.nodes[this.size - 1] : null;
  }

  insertAt(index, element) {
    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index] || null;
    const node = { element, next: nextNode, previous: previousNode };

    if (previousNode) previousNode.next = node;
    if (nextNode) nextNode.previous = node;
    this.nodes.splice(index, 0, node);
  }

  insertFirst(element) {
    this.insertAt(0, element);
  }

  insertLast(element) {
    this.insertAt(this.size, element);
  }

  getElement(index) {
    return this.nodes[index];
  }

  removeAt(index) {
    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index + 1] || null;

    if (previousNode) previousNode.next = nextNode;
    if (nextNode) nextNode.previous = previousNode;

    return this.nodes.splice(index, 1);
  }

  clear() {
    this.nodes = [];
  }

  reverse() {
    this.nodes = this.nodes.reduce((acc, { element }) => {
      const nextNode = acc[0] || null;
      const node = { element, next: nextNode, previous: null };
      if (nextNode) nextNode.previous = node;
      return [node, ...acc];
    }, []);
  }
}


const doubly = new DoublyLinkedList();

doubly.insertFirst(5);
doubly.insertFirst(8);
doubly.insertFirst(21);
doubly.insertFirst(45);

doubly.insertAt(2, 55);

console.log(doubly.size());


console.log(doubly.getHead.element); 


console.log(doubly.removeAt(3));

console.log(doubly.getElement(2).element);

console.log(doubly.reverse());

console.log(doubly.size())