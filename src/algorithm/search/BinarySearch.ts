// 二分法查找，数组有序
/**
 * 
 * @param arr: number[] 有序数组
 * @param value: number 查找的值
 * @returns index: number 返回索引
 */
function BinarySearch(arr: number[], value: number): number {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (arr[middle] > value) {
      right = middle - 1
    } else if (arr[middle] < value) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return -1
}

// console.log(BinarySearch(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   7
// ))

export default BinarySearch
