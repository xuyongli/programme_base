/**
 * 回文判断
 * 回文，英文palindrome，指一个顺着读和反过来读都一样的字符串，比如madam、我爱我，这样的短句在智力性、趣味性和艺术性上都颇有特色，中国历史上还有很多有趣的回文诗。
 * 那么，我们的第一个问题就是：判断一个字串是否是回文？
 */

// 同时从字符串头尾开始向中间扫描字串
// 时间复杂度O(n) 空间复杂度 O(1)
function IsPalindrome(s: string): boolean {
  const n = s.length
  // 非法输入
  if (s === '') return false

  let front = 0
  let back = n - 1

  while (front < back) {
    if (s[front] != s[back]) return false
    ++front
    --back
  }
  return true
}

const str = '我爱罗梓会会梓罗爱我'
console.log(str, IsPalindrome(str))
console.log(str, IsPalindrome2(str))

// 先从中间开始、然后向两边扩展查看字符是否相等
// 时间复杂度O(n) 空间复杂度 O(1)

function IsPalindrome2(s: string): boolean {
  const n = s.length
  // 非法输入
  if (s === '') return false

  let m = ((n >> 1) - 1) >= 0 ? (n >> 1) - 1 : 0;
  let first = m
  let second = n - 1 - m

  while (first >= 0) {
    if (s[first] !== s[second]) return false
    first--
    second++
  }
  return true
}

/**
 * 最长回文子串
 * 给定一个字符串，求它的最长回文子串的长度
 */

// 时间复杂度O(n^2) 空间复杂度 O(1)
function LongestPalindrome (s: string): number {
  if (s === '') return 0
  const len = s.length
  let i, j
  let c = 0
  let max = 0
  // i is the middle point of the palindrome  
  for (i = 0; i < len; i++) {
    // if the length of the palindrome is odd(奇数)
    for (j = 0; i - j >= 0 && i + j < len; j++) {
      if (s[i - j] !== s[i + j]) break
      c = j * 2 + 1
    }
    if (c > max) max = c
    // if the length of the palindrome is even(偶数)
    for (j = 0; i - j >= 0 && i + j + 1 < len; j++) {
      if (s[i - j] !== s[i + j + 1]) break
      c = j * 2
    }
    if (c > max) max = c
  }
  return max
}

console.log(LongestPalindrome('12212321'))

// 时间复杂度O(n) 空间复杂度 O(2n)
function LongestPalindrome2 (s: string): number {
  if (s === '') return 0
  const sLen = s.length
  let str = '#'
  let i, j
  for (i = 0; i < sLen; i++) {
    str += `${s[i]}#`
  }
  const strLen = str.length
  let mx = 0
  let id = 0
  const p: number[] = []
  // i is the middle point of the palindrome  
  for (i = 0; i < strLen; i++) {
    p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1
    while(str[i + p[i]] === str[i - p[i]]) p[i]++
    if (i + p[i] > mx) {
      mx = i + p[i]
      id = i
    }
  }
  return Math.max(...p) - 1
}

console.log(LongestPalindrome2('12212321'))
