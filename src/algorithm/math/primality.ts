// 素数检测
export default function isPrime(number: number): boolean {
  // Check if number is integer.
  if (number % 1 !== 0) {
    return false
  }

  if (number <= 1) {
    // If number is less than one then it isn't prime by definition.
    return false
  }

  if (number <= 3) {
    // All numbers from 2 to 3 are prime.
    return true
  }

  // If the number is not divided by 2 then we may eliminate all further even dividers.
  if (number % 2 === 0) {
    return false
  }

  // If there is no dividers up to square root of n then there is no higher dividers as well.
  const dividerLimit = Math.sqrt(number)
  for (let divider = 3; divider <= dividerLimit; divider += 2) {
    if (number % divider === 0) {
      return false
    }
  }

  return true
}

/*
计数质数
给定整数 n ，返回 所有小于非负整数 n 的质数的数量 。

示例 1：
输入：n = 10
输出：4
解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

示例 2：
输入：n = 0
输出：0

示例 3：
输入：n = 1
输出：0

提示：
0 <= n <= 5 * 106
*/
function countPrimes(n: number) {
  const isPrimes = new Array(n).fill(1);
  let num = 0;
  for (let i = 2; i < n; i++) {
      if (isPrimes[i]) {
          num ++;
          for (let j = i * i; j < n; j += i) {
              isPrimes[j] = 0;
          }
      }
  }
  return num;
};
console.log(countPrimes(100));
console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(1));
