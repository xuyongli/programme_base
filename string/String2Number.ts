/**
 * 字符串转换成整数
 * 输入一个由数字组成的字符串，把它转换成整数并输出。例如：输入字符串"123"，输出整数123。
 * 给定函数原型int StrToInt(const char *str) ，实现字符串转换成整数的功能，不能使用库函数atoi。
 */

function StrToInt(strArray: string[]): number {
  const MAX_INT = Number.MAX_SAFE_INTEGER
  let n = 0

  // 判断是否输入为空
  if (strArray.length === 0) {
    return 0
  }

  let sign = 1 // 正负
  let len = strArray.length
  for (let i = 0; i < len; i++) {
    const char = strArray[i]
    switch(char) {
      // 处理空格
      case ' ': 
      // 正负
      case '+':
        break
      case '-':
        sign = -1
        break
      default:
        const c = char.charCodeAt(0) - '0'.charCodeAt(0)
        // 处理溢出
        if (n > MAX_INT / 10 || (n === MAX_INT / 10 && c > MAX_INT % 10)) {
          // 这里直接结束循环
          return sign * MAX_INT
        }
        //把之前得到的数字乘以10，再加上当前字符表示的数字。
        n = n * 10 + c
    }
  }
  return sign * n
}

console.log(StrToInt([
  ' ', '-',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
]))

