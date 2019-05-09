// 冒泡排序
function bubbleSort(arr: number[]): number[] {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    
  }
  return arr
}

console.log(bubbleSort([3, 5, 1, 4, 2]))
