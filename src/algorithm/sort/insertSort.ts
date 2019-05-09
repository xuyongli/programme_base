// 插入排序
function insertSort(arr: number[]): number[] {
  let i = 1
  let len = arr.length
  while(i < len) {
    let j = i
    while(j > 0 && arr[j - 1] > arr[j]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      j--
    }
    i++
  }
  return arr
}

console.log(insertSort([3, 5, 1, 4, 2]))
