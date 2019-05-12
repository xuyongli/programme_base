// 希尔排序
// 时间复杂度 O(n * log(n))
function shellSort(arr: number[]): number[] {
  const len = arr.length
  let temp, i, j
  let gap = 1
  while (gap < len / 5) { //动态定义间隔序列
    gap = gap * 5 + 1
  }
  for (; gap > 0; gap = Math.floor(gap / 5)) {
    for (i = gap; i < len; i++) {
      temp = arr[i]
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
      console.log(arr.toString())
    }
  }
  return arr
}

console.log(shellSort(
  [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
))
