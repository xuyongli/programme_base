// 插入排序
// 时间复杂度 O(n^2)
function InsertionSort(arr: number[]): number[] {
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


function binaryInsertionSort(arr: number[]): number[] {
  const arrLen = arr.length
  let left, right, i, j
  for (i = 1; i < arrLen; i++) {
    left = 0
    right = i - 1
    const cur = arr[i]
    while (left <= right) {
      const middle = Math.floor((left + right) / 2)
      if (cur < arr[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
    for (j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j]
    }
    arr[left] = cur
  }
  return arr
}

console.log(binaryInsertionSort([3, 5, 1, 4, 2]))
