function numberFormat(num: number) {
    let [integer, decimal] = num.toString().split('.');
    const arr = integer.split('').reverse();
    const res = [];
    for (let i = 0; i< arr.length; i++) {
        if (i && i % 3 === 0) {
            res.push(',');
        }
        res.push(arr[i]);
    }
    integer = res.reverse().join('');
    if (decimal) {
        return integer + '.' + decimal;
    }
    return integer;

    // let [integer, decimal] = num.toString().split('.');
    // return integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (decimal ? `.${decimal}` : '');
}

console.log(numberFormat(1234567890));
console.log(numberFormat(673439.4542));
