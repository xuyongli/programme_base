// 选择排序
// 时间复杂度 O(n^2)
function selectionSort(arr:number[]): number[] {
  const len = arr.length
  let min
  for (var i = 0; i < len - 1; i++) {
    min = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) { //寻找最小的数
        min = j; //将最小数的索引保存
      }
    }
    ;[arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}

console.table(selectionSort(
  [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
))
