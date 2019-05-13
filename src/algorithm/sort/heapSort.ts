// 堆排序
// 时间复杂度 O(n * log(n))
function heapSort(arr: number[]): number[] {
  let heapSize = arr.length
  let i, j
  for (i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    heapify(arr, i, heapSize)
  }

  //堆排序
  for (j = heapSize - 1; j >= 1; j--) {
    ;[arr[0], arr[j]] = [arr[j], arr[0]]
    heapify(arr, 0, --heapSize)
  }
  return arr
}

function heapify(arr: number[], x: number, len: number) {
  let l = 2 * x + 1
  let r = 2 * x + 2
  let largest = x
  if (l < len && arr[l] > arr[largest]) {
    largest = l
  }
  if (r < len && arr[r] > arr[largest]) {
    largest = r
  }
  if (largest != x) {
    ;[arr[x], arr[largest]] = [arr[largest], arr[x]]
    heapify(arr, largest, len)
  }
}

console.table(heapSort(
  [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
))
