// 洗牌算法
function fisherYates(originalArray: number[]): number[] {
  // Clone array from preventing original array from modification (for testing purpose).
  const array = originalArray.slice(0)

  for (let i = (array.length - 1); i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[randomIndex]] = [array[randomIndex], array[i]]
  }

  return array
}

console.log(fisherYates([
  1, 2, 3, 4, 5, 6, 7, 8, 9
]).toString())
