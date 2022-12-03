function fibonacci(n: number) {
    if (n < 0) throw Error();
    if (n < 2) return n;
    let cur = 0, prev = 0, next = 1;
    for (let i = 2; i <= n; i++) {
        prev = cur;
        cur = next;
        next = prev + cur;
    }
    return next;
}

// for (let index = 0; index <= 30; index++) {
//     console.time(index.toString());
//     console.log(index, fibonacci(index));
//     console.timeEnd(index.toString());
// }


function fibonacci_1(n: number, first = 1, second = 1): number {
    if (n < 0) throw Error();
    if (n === 0) return 0;
    if (n <= 2) return 1;
    if (n === 3) return first + second;
    return fibonacci_1(n - 1, second, first+ second);
}

for (let index = 0; index <= 30; index++) {
    console.time(index.toString());
    console.log(index, fibonacci_1(index));
    console.timeEnd(index.toString());
}
