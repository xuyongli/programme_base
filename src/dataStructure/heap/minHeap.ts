import Heap from './heap'

class MinHeap extends Heap {
  /**
   * Checks if pair of heap elements is in correct order.
   * For MinHeap the first element must be always smaller or equal.
   * For MaxHeap the first element must be always bigger or equal.
   *
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   */
  public pairIsInCorrectOrder(firstElement: any, secondElement: any): boolean {
    return firstElement <= secondElement
  }
}

export default MinHeap
