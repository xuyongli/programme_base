/*
小于n的最大数
给定一个数 n，如 23121；给定一组有序数字 A 如 {2,4,9}，求由 A 中元素组成的、小于 n 的最大数，如小于 23121 的最大数为 22999。
*/

function maxNum(n: number, digits: number[]): number {
    const s = '' + n;
    const m = digits.length, k = s.length;
    const bits = [];
    let isLimit = true;
    for (let i = 0; i < k; i++) {
        if (!isLimit) {
            bits.push(m - 1);
        } else {
            let selectIndex = -1;
            for (let j = 0; j < m; j++) {
                if (digits[j] <= parseInt(s[i])) {
                    selectIndex = j;
                } else {
                    break;
                }
            }
            if (selectIndex >= 0) {
                bits.push(selectIndex);
                if (digits[selectIndex] < parseInt(s[i])) {
                    isLimit = false;
                }
            } else {
                let len = bits.length;
                while (bits.length !== 0 && bits[bits.length - 1] === 0) {
                    bits.pop();
                }
                if (bits.length !== 0) {
                    const n = bits.length;
                    bits.splice(n - 1, 1, bits[n - 1] - 1);
                } else {
                    len--;
                }
                while (bits.length <= len) {
                    bits.push(m - 1);
                }
                isLimit = false;
            }
        }
    }
    return parseInt(bits.map(i => digits[i]).join(''));
}

console.log(maxNum(23121, [2, 4, 9]));
console.log(maxNum(10000, [1, 3, 5, 7]));
