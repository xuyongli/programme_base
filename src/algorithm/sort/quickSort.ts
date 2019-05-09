
// 快速排序
function quickSort(arr: number[]): number[] {
  const sort = (left: number, right:number): void => {
    if (left >= right) return
    let i = left
    let j = right
    const base = arr[j] // 最右边的一个值为基准
    while(i < j) {
      while(i < j && arr[i] <= base) { i++ } // 从左边开始比较
      arr[j] = arr[i] // 右边放大数
      while(j > i && arr[j] >= base) { j-- } // 从右边开始再次比较
      arr[i] = arr[j] // 左边放小数
    }
    arr[j] = base // 基准值放中间
    sort(left, j - 1)
    sort(j + 1, right)
  }
  sort(0, arr.length - 1)
  return arr
}

console.log(quickSort([3, 5, 1, 4, 2]))
