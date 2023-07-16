// 函数柯里化
function curry(fn, ...args) {
    if (fn.length <= args.length) {
        return fn(...args);
    }
    return (..._args) => curry(fn, ...args, ..._args);
}

function add1(x, y, z) {
    return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));

// 6
// 6
// 6
// 6
