/**
 * 字符串包含
 * 题目描述
 * 给定两个分别由字母组成的字符串A和字符串B，字符串B的长度比字符串A短。请问，如何最快地判断字符串B中所有字母是否都在字符串A里？
 * 为了简单起见，我们规定输入的字符串只包含大写英文字母，请实现函数bool StringContains(string &A, string &B)
 * 比如，如果是下面两个字符串：
 * String 1：ABCD
 * String 2：BAD
 * 答案是true，即String2里的字母在String1里也都有，或者说String2是String1的真子集。
 * 如果是下面两个字符串：
 * String 1：ABCD
 * String 2：BCE
 * 答案是false，因为字符串String2里的E字母不在字符串String1里。
 * 同时，如果string1：ABCD，string 2：AA，同样返回true。
 */

// 遍历比较
// 时间复杂度 O(m*n)
function StringContain(a: string, b: string): boolean {
  const m = a.length
  const n = b.length
  for (let i = 0; i < n; ++i) {
    let j: number
    for (j = 0; (j < m) && (a[j] != b[i]); ++j) {}
    if (j >= m) {
      return false
    }
  }
  return true
}

console.log(StringContain('ABCD', 'BAD'))

// 先排序，再比较
function StringContain2(a: string, b: string): boolean {
  const aArray = Array.prototype.slice.apply(a).sort()
  const bArray = Array.prototype.slice.apply(b).sort()
  const m = aArray.length
  const n = bArray.length
  for (let i = 0, j = 0; j < n;) {
    while(i < m && aArray[i] < bArray[j]) { i++ }
    if (i >= m || aArray[i] > bArray[j]) {
      return false
    }
    j++
  }
  return true
}

console.log(StringContain2('ABCD', 'BAD'))


// 素数乘积
// 时间复杂度为 O(m+n)
// 空间复杂度 O(1)
// 此方法只有理论意义，因为整数乘积很大，有溢出风险
function StringContain3(a: string, b: string): boolean {
  const p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,61, 67, 71, 73, 79, 83, 89, 97, 101]
  let f = 1;
  for (let i = 0; i < a.length; ++i) {
    const idx = a[i].charCodeAt(0) - 'A'.charCodeAt(0)
    const x = p[idx]
    if (f % x) f *= x
  }
  for (let i = 0; i < b.length; ++i) {
    const idx = b[i].charCodeAt(0) - 'A'.charCodeAt(0)
    const x = p[idx]
    if (f % x) return false
  }
  return true
}

console.log(StringContain3('ABCD', 'BAD'))

// 位运算
// 时间复杂度为 O(m+n)
// 空间复杂度 O(1)
// “最好的方法”
function StringContain4(a: string, b: string): boolean {
  let hash = 0
  for (let i = 0; i < a.length; ++i) {
    hash |= (1 << (a[i].charCodeAt(0) - 'A'.charCodeAt(0)))
  }
  for (let i = 0; i < b.length; ++i) {
    if ((hash & (1 << (b[i].charCodeAt(0) - 'A'.charCodeAt(0)))) == 0) return false
  }
  return true
}

console.log(StringContain4('ABCD', 'BAD'))

/**
 * 变位词
 * 如果两个字符串的字符一样，但是顺序不一样，被认为是兄弟字符串，比如 bad 和 adb 即为兄弟字符串，现提供一个字符串，如何在字典中迅速找到它的兄弟字符串，请描述数据结构和查询过程。
 */

const DICTIONARY = ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA', 'ABCD', 'ABCF']
function getStringHash (a: string): number {
  let hash = 0
  a = a.toUpperCase()
  for (let i = 0; i < a.length; ++i) {
    hash |= (1 << (a[i].charCodeAt(0) - 'A'.charCodeAt(0)))
  }
  return hash
}
function PreProcessDict (dict: string[]): { [key: string]: string[] } {
  const DictMap: { [key: string]: string[] } = {}
  for (let i = 0; i < dict.length; i++) {
    const word = dict[i]
    const hash = getStringHash(word)
    if (DictMap[hash]) {
      DictMap[hash].push(word)
    } else {
      DictMap[hash] = [word]
    }
  }
  return DictMap
}
function getAnagramFromDict(dict: string[], word: string): string[] {
  return PreProcessDict(dict)[
    getStringHash(word)
  ] || []
}
// 不区分大小写
console.log(getAnagramFromDict(DICTIONARY, 'abc'))
