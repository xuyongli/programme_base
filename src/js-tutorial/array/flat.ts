function flat(arr: any[], num = 1) {
    if (num <= 0) return arr;
    let ret: any[] = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            ret = ret.concat(flat(item, num - 1));
        } else {
            ret.push(item);
        }
    });
    return ret;
}

const animals = ["🐷", ["🐶", "🐂"], ["🐎", ["🐑", ["🐲"]], "🐛"]];
console.log(flat(animals));
console.log(flat(animals, 2));
console.log(flat(animals, Infinity));
console.log(flat(["🐷", "🐶", "🐂", "🐎",,]));
