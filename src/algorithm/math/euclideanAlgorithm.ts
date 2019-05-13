// 最大公约数
export default function euclideanAlgorithm(originalA: number, originalB: number): number {
  // Make input numbers positive.
  const a = Math.abs(originalA)
  const b = Math.abs(originalB)

  // To make algorithm work faster instead of subtracting one number from the other
  // we may use modulo operation.
  return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}

// console.log(euclideanAlgorithm(12, 18))
