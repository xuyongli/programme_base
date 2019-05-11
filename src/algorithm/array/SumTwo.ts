/**
 * 寻找和为定值的两个数
 * 题目描述
 * 输入一个数组和一个数字，在数组中查找两个数，使得它们的和正好是输入的那个数字。
 * 要求时间复杂度是O(N)。如果有多对数字的和等于输入的数字，输出任意一对即可。
 * 例如输入数组1、2、4、7、11、15和数字15。由于4+11=15，因此输出4和11。
 */

type ResultItem = [number, number]

// 数组有序
// 二分法查找
// 时间复杂度为 O(n * log(n))，空间复杂度为 O(1)
import BinarySearch from '../search/BinarySearch'
function TwoSumOfSortedArray(arr: number[], sum: number): Array<ResultItem> {
  let retArr: Array<ResultItem> = []
  const arrLen = arr.length
  // 当arr[i] > sum / 2时，sum - arr[i]肯定在i前面
  for (let i = 0; i < arrLen && arr[i] <= sum / 2; i++) {
    const another = sum - arr[i]
    // 二分法查找
    const anotherIndex = BinarySearch(arr, another)
    if (anotherIndex !== -1) {
      retArr.push([arr[i], another])
    }
  }
  return retArr
}
// console.table(
//   TwoSumOfSortedArray(
//     [1, 2, 4, 7, 11, 13, 14, 15],
//     15
//   )
// )


// 前后指针扫描
// 时间复杂度为 O(n)，空间复杂度为 O(n)
function TwoSumOfSortedArray2(arr: number[], sum: number): Array<ResultItem> {
  const retArr: Array<ResultItem> = []
  const arrLen = arr.length
  const anotherArr: number[] = []
  let i, j
  for (i = 0; i < arrLen; i++) {
    anotherArr[i] = sum - arr[i]
  }

  for (j = 0; j < arrLen / 2;) {
    if (arr[j] < anotherArr[i - 1]) {
      j++
    } else if (arr[j] > anotherArr[i - 1]) {
      i--
    } else {
      retArr.push([arr[j], arr[i - 1]])
      i--
    }
  }
  return retArr
}
// console.table(
//   TwoSumOfSortedArray2(
//     [1, 2, 4, 7, 11, 13, 14, 15],
//     15
//   )
// )


// 数组无序
// 哈希表
// 时间复杂度为 O(n)，空间复杂度为 O(n)
function TwoSumOfSortedArray3(arr: number[], sum: number): Array<ResultItem> {
  const retArr: Array<ResultItem> = []
  const arrLen = arr.length
  const hashMap: { [key: string]: number } = {}
  for (let i = 0; i < arrLen; i++) {
    const key = Math.abs(2 * arr[i] - sum)
    hashMap[key] = hashMap[key] === undefined ? 1 : hashMap[key] + 1
  }
  Object.keys(hashMap).forEach(key => {
    if (hashMap[key] > 1) {
      let num: number = +key
      retArr.push([
        (sum + num) / 2,
        (sum - num) / 2
      ])
    }
  })
  return retArr
}
console.table(
  TwoSumOfSortedArray3(
    [15, 12, 4, 14, 11, 13, 2, 1],
    15
  )
)
