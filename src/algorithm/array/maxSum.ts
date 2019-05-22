// 从数组中取连续的最大和
function getMaxSum(arr: number[]): number {
  let sum = 0
  let tmp = 0
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    tmp += arr[i]
    if (tmp > sum) {
      sum = tmp
    }
    if (tmp < 0) {
      tmp = 0
    }
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  if (sum === 0) {
    sum = max
  }
  return sum
}

console.log(getMaxSum(
  [-3, -1, -2]
))
