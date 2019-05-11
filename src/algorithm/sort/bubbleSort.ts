// 冒泡排序
// 时间复杂度 O(n^2)
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

// 优化1
function bubbleSort2(arr: number[]): number[] {
  let i = arr.length - 1 //初始时,最后位置保持不变
  let j, pos
  while (i > 0) {
    pos= 0 //每趟开始时,无记录交换
    for (j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos= j //记录交换的位置
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    i = pos; //为下一趟排序作准备
  }
  return arr
}

// 优化2
function bubbleSort3(arr: number[]): number[] {
  let low = 0
  let high = arr.length - 1 //设置变量的初始值
  let j
  while (low < high) {
    for (j = low; j < high; j++) { //正向冒泡,找到最大者
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    high-- //修改high值, 前移一位
    for (j = high; j > low; j--) { //反向冒泡,找到最小者
      if (arr[j] < arr[j - 1]) {
        ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
    low++ //修改low值,后移一位
  }
  return arr
}

console.table(bubbleSort3(
  [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
))
