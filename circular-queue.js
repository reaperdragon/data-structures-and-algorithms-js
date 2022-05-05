class CircularQueue{
    constructor(size) {
        this.arr = [];
        this.size = size;
        this.length = 0;
        this.front = 0;
        this.rear = -1;
    }

    isEmpty() {
        return this.length === 0
    }

    enqueue(element) {
        if (this.length >= this.size) {
            console.log('full')
        }
        this.arr[(this.rear + 1) % this.size] = element;
        this.length++;
    }

    print() {
        for (let i = 0; i < this.arr.length; i++){
            return this.arr[i];
        }
    }

    getFront() {
        if (this.isEmpty()) {
            console.log('no element');
        }
        return this.arr[(this.front) % (this.size)];
    }
    
    deque() {
        if (this.isEmpty()) {
            return undefined;
        }
        const value = this.getFront();
        this.arr[this.front % this.size] = null;
        this.front++;
        this.length--;
        console.log(value);
 
    }
}

let cq = new CircularQueue(8);
cq.enqueue(10);
cq.enqueue(14);
cq.enqueue(18);
cq.enqueue(24);
cq.enqueue(65);
cq.enqueue(56);
cq.enqueue(12);
cq.enqueue(20);

cq.print();

cq.deque();
