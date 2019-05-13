import Heap from './heap'

class MaxHeap extends Heap {
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
    return firstElement >= secondElement
  }
}

const maxHeap = new MaxHeap()
maxHeap.add(6)
maxHeap.add(7)
maxHeap.add(8)
maxHeap.add(9)
maxHeap.add(10)
maxHeap.add(1)
maxHeap.add(2)
maxHeap.add(3)
maxHeap.add(4)
maxHeap.add(5)
console.log(maxHeap.peek())
console.log(maxHeap.toString())

export default MaxHeap
