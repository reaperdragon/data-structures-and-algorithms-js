const { LinkedList } = require('./linked-list');
const { defaultEquals } = require('./linked-list');

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class SortedLinkedList extends LinkedList {
    constructor(equalsFun = defaultEquals, compareFn = defaultCompare) {
        super(equalsFun);
        this.compareFn = compareFn;
    }
    
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element,0)
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }

    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++){
            const comp = this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }

}

const linked_list = new SortedLinkedList();

linked_list.insert(2);
linked_list.insert(4);
linked_list.insert(8);
linked_list.insert(51);

console.log(linked_list.getIndexNextSortedElement(8)); // 3



