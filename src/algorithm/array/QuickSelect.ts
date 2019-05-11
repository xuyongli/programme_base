/**
 * 寻找最小的k个数
 * 输入n个整数，输出其中最小的k个
 */

// 方法一：先排序，再取
// 时间复杂度：O(n * log n) + O(k)=O(n * log n)
import quickSort from '../sort/quickSort'
function quickSelect (arr: number[], num: number): number[] {
  const sortedArr = quickSort(arr)
  const retArr: number[] = []
  if (num <= 0 || num >= sortedArr.length) {
    return retArr
  }
  for (let i = 0; i < num; i++) {
    retArr[i] = sortedArr[i]
  }
  return retArr
}

const arr = quickSelect([10, 5, 4, 3, 7, 8, 2, 1, 9], 4)
// console.log(arr)

// 方法二：利用选择或交换排序思路，不排序，只取k个数，且不确保有序
// 时间复杂度：n * O(k）= O(n*k)
function quickSelect2 (arr: number[], num: number): number[] {
  let retArr: number[] = []
  if (num <= 0 || num >= arr.length) {
    return retArr
  }
  // for (let i = 0; i < num; i++) {
  //   retArr[i] = arr[i]
  // }
  retArr = arr.slice(0, num)
  const findMax = () => {
    for (let i = 0; i < retArr.length; i++) {
      if (retArr[0] < retArr[i]) {
        [retArr[0], retArr[i]] = [retArr[i], retArr[0]]
      }
    }
    return retArr[0]
  }
  let retMax: number = findMax()
  for (let i = num; i < arr.length; i++) {
    if (retMax <= arr[i]) {
      continue
    }
    retArr[0] = arr[i]
    retMax = findMax()
  }
  return retArr
}

const arr2 = quickSelect2([10, 5, 4, 3, 7, 8, 2, 1, 9], 4)
// console.log(arr2)

// 方法三：维护容量为k的最大堆，
// 时间复杂度:O(k + (n - k) * logk) = O(n * logk)

// 方法四：快速选择算法，时间复杂度：O(n)
// 选取S中一个元素作为枢纽元v，将集合S-{v}分割成S1和S2，就像快速排序那样
// 如果k <= |S1|，那么第k个最小元素必然在S1中。在这种情况下，返回QuickSelect(S1, k)。
// 如果k = 1 + |S1|，那么枢纽元素就是第k个最小元素，即找到，直接返回它。
// 否则，这第k个最小元素就在S2中，即S2中的第（k - |S1| - 1）个最小元素，我们递归调用并返回QuickSelect(S2, k - |S1| - 1)。

function quickSelect4 (arr: number[], num: number): number[] {
  const retArr: number[] = []
  if (num <= 0 || num >= arr.length) {
    return retArr
  }
  function swap (i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  function partition(start: number, end: number): number {
    const pivot = arr[end] //设置哨兵
    let i = start //交换的次数+1 哨兵要在数组插入的位置
    for (let j = start; j < end; j++) {
      if (arr[j] < pivot) {
        swap(i, j)
        i++
      }
    }
    swap(i, end)
    return i
  }
  let start = 0
  let end = arr.length - 1
  let p = partition(start, end)
  while (p !== num - 1) {
    if (p > num - 1) {
      end = p - 1
      p = partition(start, end)
    } else {
      start = p + 1
      p = partition(start, end)
    }
  }
  for (let i = 0; i < num; i++) {
    retArr[i] = arr[i]
  }
  return retArr
}
const arr4 = quickSelect4([10, 5, 4, 3, 7, 8, 2, 1, 9], 4)
// console.log(arr4)


/**
 * 有两个序列A和B,A=(a1,a2,...,ak),B=(b1,b2,...,bk)，A和B都按升序排列。对于1<=i,j<=k，求k个最小的（ai+bj）。要求算法尽量高效
 */

function quickSelect5(arrA: number[], arrB: number[], k: number): number[] {
  const lenA = arrA.length
  const lenB = arrB.length
  let retArr: number[] = []
  if (!lenA || !lenB || k <= 0 || k >= lenA * lenB) return retArr

  let i = lenA
  let j = lenB
  //当前情况是否满足条件
  while (i > 0 && j > 0) {
    //移动哪一个数组的元素
    if (arrA[i - 1] >= arrB[j - 1]) {
      if ((i - 1) * j >= k) {
        i--
      } else {
        break
      }
    } else {
      if ((j - 1) * i >= k) {
        j--
      } else {
        break
      }
    }
  }
  let count
  let p, q
  //A[i-1]>B[i-1],则先计算B元素的和,避免A[i-1]算入
  if (arrA[i - 1] > arrB[j - 1]) {
    count = 0
    for (p = 0; p < i; p++) {
      for (q = 0; q < j; q++) {
        if (count < k) {
          console.log('A: ' + p, 'B: ' + q)
          retArr[count++] = arrA[p] + arrB[q]
        } else {
          break
        }
      }
    }
  } else {
    count = 0
    for (p = 0; p < j; p++) {
      for (q = 0; q < i; q++) {
        if (count < k) {
          console.log('B: ' + p, 'A: ' + q)
          retArr[count++] = arrB[p] + arrA[q]
        } else {
          break
        }
      }
    }
  }
  return retArr
}

console.log(quickSelect5(
  [1, 3, 5, 7, 9],
  [2, 4, 6, 8, 10],
  5
))
