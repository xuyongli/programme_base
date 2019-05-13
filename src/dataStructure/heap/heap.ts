/**
 * Parent class for Min and Max Heaps.
 */
class Heap {
  private heapContainer: any[]

  /**
   * @constructs Heap
   */
  constructor() {
    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly')
    }

    // Array representation of the heap.
    this.heapContainer = []
  }

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  public getLeftChildIndex(parentIndex: number): number {
    return (2 * parentIndex) + 1
  }

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  public getRightChildIndex(parentIndex: number): number {
    return (2 * parentIndex) + 2;
  }

  /**
   * @param {number} childIndex
   * @return {number}
   */
  public getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2)
  }

  /**
   * @param {number} childIndex
   * @return {boolean}
   */
  public hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) >= 0
  }

  /**
   * @param {number} parentIndex
   * @return {boolean}
   */
  public hasLeftChild(parentIndex: number): boolean {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length
  }

  /**
   * @param {number} parentIndex
   * @return {boolean}
   */
  public hasRightChild(parentIndex: number): boolean {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length
  }

  /**
   * @param {number} parentIndex
   * @return {*}
   */
  public leftChild(parentIndex: number): any {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)]
  }

  /**
   * @param {number} parentIndex
   * @return {*}
   */
  public rightChild(parentIndex: number): any {
    return this.heapContainer[this.getRightChildIndex(parentIndex)]
  }

  /**
   * @param {number} childIndex
   * @return {*}
   */
  public parent(childIndex: number): any {
    return this.heapContainer[this.getParentIndex(childIndex)]
  }

  /**
   * @param {number} indexOne
   * @param {number} indexTwo
   */
  public swap(indexOne: number, indexTwo: number): void {
    const tmp = this.heapContainer[indexTwo]
    this.heapContainer[indexTwo] = this.heapContainer[indexOne]
    this.heapContainer[indexOne] = tmp
  }

  /**
   * @return {*}
   */
  public peek(): any {
    if (this.heapContainer.length === 0) {
      return null
    }

    return this.heapContainer[0]
  }

  /**
   * @return {*}
   */
  public poll(): any {
    if (this.heapContainer.length === 0) {
      return null
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop()
    }

    const item = this.heapContainer[0]

    // Move the last element from the end to the head.
    this.heapContainer[0] = this.heapContainer.pop()
    this.heapifyDown()

    return item
  }

  /**
   * @param {*} item
   * @return {Heap}
   */
  public add(item: any): Heap {
    this.heapContainer.push(item)
    this.heapifyUp()
    return this
  }

  /**
   * @param {*} item
   * @return {Heap}
   */
  public remove(item: any) {
    // Find number of items to remove.
    const numberOfItemsToRemove = this.find(item).length

    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      // We need to find item index to remove each time after removal since
      // indices are being changed after each heapify process.
      const indexToRemove = this.find(item).pop() as number

      // If we need to remove last child in the heap then just remove it.
      // There is no need to heapify the heap afterwards.
      if (indexToRemove === (this.heapContainer.length - 1)) {
        this.heapContainer.pop()
      } else {
        // Move last element in heap to the vacant (removed) position.
        this.heapContainer[indexToRemove] = this.heapContainer.pop()

        // Get parent.
        const parentItem = this.parent(indexToRemove)

        // If there is no parent or parent is in correct order with the node
        // we're going to delete then heapify down. Otherwise heapify up.
        if (
          this.hasLeftChild(indexToRemove)
          && (
            !parentItem
            || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove])
          )
        ) {
          this.heapifyDown(indexToRemove)
        } else {
          this.heapifyUp(indexToRemove)
        }
      }
    }

    return this;
  }

  /**
   * @param {*} item
   * @return {Number[]}
   */
  public find(item: any): number[] {
    const foundItemIndices = []

    for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
      if (item === this.heapContainer[itemIndex]) {
        foundItemIndices.push(itemIndex)
      }
    }

    return foundItemIndices
  }

  /**
   * @return {boolean}
   */
  public isEmpty(): boolean {
    return !this.heapContainer.length
  }

  /**
   * @return {string}
   */
  public toString() {
    return this.heapContainer.toString()
  }

  /**
   * @param {number} [customStartIndex]
   */
  public heapifyUp(customStartIndex?: number) {
    // Take the last element (last in array or the bottom left in a tree)
    // in the heap container and lift it up until it is in the correct
    // order with respect to its parent element.
    let currentIndex = customStartIndex || this.heapContainer.length - 1

    while (
      this.hasParent(currentIndex)
      && !this.pairIsInCorrectOrder(
        this.parent(currentIndex),
        this.heapContainer[currentIndex]
      )
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex))
      currentIndex = this.getParentIndex(currentIndex)
    }
  }

  /**
   * @param {number} [customStartIndex]
   */
  public heapifyDown(customStartIndex = 0) {
    // Compare the parent element to its children and swap parent with the appropriate
    // child (smallest child for MinHeap, largest child for MaxHeap).
    // Do the same for next children after swap.
    let currentIndex = customStartIndex
    let nextIndex = null

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex)
        && this.pairIsInCorrectOrder(
          this.rightChild(currentIndex),
          this.leftChild(currentIndex)
        )
      ) {
        nextIndex = this.getRightChildIndex(currentIndex)
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex)
      }

      if (this.pairIsInCorrectOrder(
        this.heapContainer[currentIndex],
        this.heapContainer[nextIndex],
      )) {
        break
      }

      this.swap(currentIndex, nextIndex)
      currentIndex = nextIndex
    }
  }

  /**
   * Checks if pair of heap elements is in correct order.
   * For MinHeap the first element must be always smaller or equal.
   * For MaxHeap the first element must be always bigger or equal.
   *
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   */
  /* istanbul ignore next */
  public pairIsInCorrectOrder(firstElement: any, secondElement: any): boolean {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `)
  }
}

export default Heap
