//Iterative Fibonacci
const fibonacci = (n) => {
    if (n < 1) return 0;
    if (n <= 2) return 1;

    let fibMinus2 = 0;
    let fibMinus1 = 1;
    let fibN = n;
    for (let i = 2; i <= n; i++){
        fibN = fibMinus1 + fibMinus2;
        fibMinus2 = fibMinus1;
        fibMinus1 = fibN
    }
    return fibN
}

const data1 = 15;
console.log(fibonacci(data1));

//Recursive Fibonacci
const fibonacciRecursive = (n) => {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const data2 = 20;
console.log(fibonacciRecursive(data2));

//Fibonacci Memoization

function fib(n, res = [0, 1, 1]) {
  if (res[n]) {
    return res[n];
  }

  res[n] = fib(n - 1, res) + fib(n - 2, res);
  return res[n];
}

const data3 = 155;

console.log(fib(data3));