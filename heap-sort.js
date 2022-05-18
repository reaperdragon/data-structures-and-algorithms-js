class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildrenIndex(index) {
    return 2 * index + 1;
  }

  rightChildrenIndex(index) {
    return 2 * index + 2;
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  insert(item) {
    this.heap.push(item);
    let index = this.heap.length - 1;
    let parent = this.parentIndex(index);

    while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
      this.swap(parent, index);
      index = this.parentIndex(index);
      parent = this.parentIndex(index);
    }
    }
    
    delete() {
        let item = this.heap.shift();
        this.heap.unshift(this.heap.pop());
        let index = 0;
        let leftChild = this.leftChildrenIndex(index);
        let rightChild = this.rightChildrenIndex(index);
        while (this.heap[rightChild] && this.heap[leftChild] > this.heap[index] || this.heap[rightChild] > this.heap[index]) {
            let max = leftChild;
            if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max]) {
                max = rightChild;
            }
            this.swap(max, index);
            index = max;
            leftChild = this.leftChildrenIndex(max);
            rightChild = this.rightChildrenIndex(max);
        }
        return item;
    }
}


const heapSort = (arr) => {
    let sorted = [];
    let heap1 = new MaxHeap();

    for (let i = 0; i < arr.length; i++){
        heap1.insert(arr[i]);
    }

    for (let i = 0; i < arr.length; i++){
        sorted.push(heap1.delete())
    }
    return sorted;
}

const data1 = [1, 5, 7, 2, 4, 9, 4, 6, 2, 3];
console.log(heapSort(data1));