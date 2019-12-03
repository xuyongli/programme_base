
/**
 * 旋转字符串
 * 题目描述: 给定一个字符串，要求把字符串前面的若干个字符移动到字符串的尾部，如把字符串“abcdef”前面的2个字符'a'和'b'移动到字符串的尾部，使得原字符串变成字符串“cdefab”。请写一个函数完成此功能，要求对长度为n的字符串操作的时间复杂度为 O(n)，空间复杂度为 O(1)。
 */

// 暴力移位法
// 空间复杂度 O(1)
// 时间复杂度 O(n*m)

function LeftRotateString (s: string[], n: number): void {
  const len = s.length
  while (n--) {
    let t = s[0]  //保存第一个字符
    for (let i = 1; i < len; i++) {
      s[i - 1] = s[i]
    }
    s[len - 1] = t
  }
}
const arrString = ['a', 'b', 'c', 'd', 'e', 'f']
// LeftRotateString(arrString, 2)
// console.log(arrString)

// 三步反转法
// 空间复杂度 O(1)
// 时间复杂度 O(n)

function ReverseString (s: string[], from: number, to: number): void {
  while(from < to) {
    const t = s[from]
    s[from++] = s[to]
    s[to--] = t
  }
}

function LeftRotateString2 (s: string[], n: number) {
  const len = s.length
  const m = n % len
  ReverseString(s, 0, m - 1)
  ReverseString(s, m, len - 1)
  ReverseString(s, 0, len - 1)
}

LeftRotateString2(arrString, 2)
console.log(arrString)

// 调用String API
function LeftRotateString3 (s: string, n: number): string {
  return s.slice(n) + s.slice(0, n)
}

console.log(LeftRotateString3('abcdef', 2))

// 翻转一句话，空格隔开
function ReverseParagraph(s: string): string {
  return s.split(' ').reverse().join(' ')
}

console.log(ReverseParagraph('I am a student.'))

// test
