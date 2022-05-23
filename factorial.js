//Iterative
const factorialIterative = (num) => {
    if (num < 0) return undefined;
    let total = 1;
    for (let n = num; n > 1; n--){
        total = total * n;

    }
    return total;
}

const data1 = 5;
console.log(factorialIterative(data1));

//Recursive
const factorialRecursive = (num) => {
    if (num === 1 || num === 0) {
        return 1;
    }
    return num * factorialRecursive(num - 1);
}

const data2 = 5;
console.log(factorialRecursive(data2));