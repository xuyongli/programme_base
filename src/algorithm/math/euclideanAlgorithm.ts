// 最大公约数
export default function euclideanAlgorithm(originalA: number, originalB: number): number {
  // Make input numbers positive.
  const a = Math.abs(originalA)
  const b = Math.abs(originalB)

  // To make algorithm work faster instead of subtracting one number from the other
  // we may use modulo operation.
  return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}

function euclideanAlgorithm2(a: number, b: number) {
  a = Math.abs(a);
  b = Math.abs(b);
  while(b) {
    [a, b] = [b, a % b];
  }
  return a;
}

// console.log(euclideanAlgorithm2(12, 18));
// console.log(euclideanAlgorithm2(12, -18));
