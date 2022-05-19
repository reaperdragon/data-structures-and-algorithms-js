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