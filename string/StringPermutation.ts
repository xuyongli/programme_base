/**
 * 字符串的全排列
 * 输入一个字符串，打印出该字符串中字符的所有排列。例如输入字符串abc，则输出由字符a、b、c 所能排列出来的所有字符串
 * abc、acb、bac、bca、cab 和 cba。
 */

// 递归实现
// 空间复杂度 O(1), 时间复杂度 O(n!)
function CalcAllPermutation(perm: string[], idx: number = 0, res: string[] = []): string[] {
  if (idx === perm.length - 1) {
    res.push(perm.join(''))
  } else {
    for (let i = idx; i < perm.length; i++) {
      ;[perm[idx], perm[i]] = [perm[i], perm[idx]]
      CalcAllPermutation(perm, idx + 1, res)
      ;[perm[idx], perm[i]] = [perm[i], perm[idx]]
    }
  }
  return res
}

console.log(CalcAllPermutation(['a', 'b', 'c']).toString())

