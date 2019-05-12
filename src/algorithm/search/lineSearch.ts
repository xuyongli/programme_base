// 线性查找，顺序查找

/**
 * 数组中查找某个值
 * @param arr: number[]
 * @param value: number
 * @returns index: number
 */
function lineSearch(arr: number[], value: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }
  return -1
}

/**
 * 查找数组最小值
 * @param arr: number[] 
 * @returns min: number
 */
function findMin(arr: number[]): number | null {
  const len = arr.length
  if (!len) return null
  let min = arr[0]
  for (let i = 1; i < len; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

/**
 * 查找数组最大值
 * @param arr: number[]
 * @returns max: number
 */
function finMax(arr: number[]): number | null {
  const len = arr.length
  if (!len) return null
  let max = arr[0]
  for (let i = 1; i < len; i++) {
    if (arr[i] < max) {
      max = arr[i]
    }
  }
  return max
}
