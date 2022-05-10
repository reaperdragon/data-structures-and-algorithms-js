/**
 * SET
 * 
 * 
 *  add(element) : This adds a new element to the set
 *  
 *  delete(element): This removes the element from the set.
 * 
 *  has(element) : This returns true if the element exists in the set and false otherwise.
 * 
 *  clear() : This removes all the element from the set.
 * 
 *  size() : This returns how many elements the set contains.
 * 
 *  value() : This returns an array of all values of the set 
 */

class Set{
    constructor() {
        this.item = [];
    }

    has(element) {
        return element in this.item;
    }

    add(element) {
        if (!this.has(element)) {
            this.item[element] = element
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.item[element];
            return true;
        }
        return false;
    }

    size() {
        return Object.keys(this.item).length;
    }

    values() {
        return Object.values(this.item);
    }

}

const set = new Set();

set.add(21);
console.log(set.size()); // 1
console.log(set.has(5)); // false
console.log(set.values()); // [21]

set.add(24);
console.log(set.values()); // [21,24]
console.log(set.size()); // 2
console.log(set.has(24)); // true

set.delete(21);
console.log(set.values()); // [24]

console.log(set.size()); // 1
