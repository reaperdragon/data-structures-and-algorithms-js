/**
 * QUEUES
 * 
 * enqueue(element) : This method adds new element at the back of the queue.
 * dequeue() : This method removes the first element from the queue.It also returns the removed element.
 * peek() : This method returns the first element from the queue.
 * isEmpty() : This method returns true if the queue doesn't contain any elements, and false if queue size is bigger than 0.
 * size(): This method returns the number of elements the queue contains.
 * 
 */

class Queue{
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.obj = {};
    }

    enqueue(element) {
        this.obj[this.count] = element;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.obj[this.lowestCount];
        delete this.obj[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    peek() {
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
            return '';
        }
        let objStr = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++){
            objStr = `${objStr},${this.obj[i]}`
        }
        return objStr;
    }

}

const queue = new Queue();
console.log(queue.isEmpty());


queue.enqueue('Steve');
queue.enqueue('Sam');

queue.enqueue('Bucky');

console.log(queue.toString()); // Steve,Sam,Bucky
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false
queue.dequeue(); //remove Steve
queue.dequeue(); // remove Sam
console.log(queue.toString()); // Bucky