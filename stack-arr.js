/*
STACKS

-- push(element(s)) : This method adds a new element top of the stack.
-- pop() : This method remove element from top of the stack. It also returns the removed element.
-- peek() : This element returns the top element from the stack.
-- isEmpty() : This method returns true if the stack doesn't contain any element. and false if the size of the stack is bigger than 0.
-- clear() : This method removes all elements from the stack.
-- size() : This method returns number of elements that stack contains.

*/
class Stack{
    constructor() {
        this.arr = [];
    }

    push(element) {
        return this.arr.push(element);
    }

    pop() {
        return this.arr.pop();
    }

    peek() {
        return this.arr[this.arr.length - 1];
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    size() {
        return this.arr.length;
    }

    clear() {
        return this.arr = [];
    }
    
}

const stack = new Stack();
console.log(stack.isEmpty())

stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size());