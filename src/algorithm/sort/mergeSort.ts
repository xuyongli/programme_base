// 归并排序
// 时间复杂度 O(n * log(n))
function mergeSort(arr: number[]): number[] {
  let len = arr.length
  if(len < 2) {
    return arr
  }
  const middle = Math.floor(len / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left: number[], right: number[]): number[] {
  const result: number[] = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift() as number)
    } else {
      result.push(right.shift() as number)
    }
  }
  while (left.length) {
    result.push(left.shift() as number)
  }
  while (right.length) {
    result.push(right.shift() as number)
  }
  return result
}

console.table(mergeSort(
  [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
))
