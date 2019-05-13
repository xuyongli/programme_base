// 最小公倍数
import euclideanAlgorithm from './euclideanAlgorithm'
export default function leastCommonMultiple(a: number, b: number): number {
  return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b)
}

// console.log(leastCommonMultiple(6, 8))
