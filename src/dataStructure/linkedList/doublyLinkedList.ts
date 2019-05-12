class DoublyLinkNode {
  public element: any
  public next: null | DoublyLinkNode
  public prev: null | DoublyLinkNode

  constructor(element: any) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  private head: DoublyLinkNode | null
  private tail: DoublyLinkNode | null
  constructor () {
    this.head = null
    this.tail = null
  }

  public isEmpty (): boolean {
    return this.head === null
  }

  public size (): number {
    let count = 0
    let curNode = this.head
    while(curNode) {
      count++
      curNode = curNode.next
    }
    return count
  }

  public insertHead (element: any) {
    const node = new DoublyLinkNode(element) // Create a new link with a value attached to it
    if (this.head === null) { // Set the first element added to be the tail
      this.tail = node
    } else {
      this.head.prev = node
    }
    node.next = this.head
    this.head = node
  }

  public insertTail (element: any) {
    const node = new DoublyLinkNode(element)
    if (this.tail === null) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
  }

  public insertIndex (element: any, index: number): boolean {
    const size = this.size()
    if (index < 0 || index > size) {
      return false
    }
    if (index === 0) {
      this.insertHead(element)
      return true
    } else if (index === size) {
      this.insertTail(element)
      return true
    } else {
      const node = new DoublyLinkNode(element)
      let curNode = this.head as DoublyLinkNode
      while(--index > 0) {
        curNode = curNode.next as DoublyLinkNode
      }
      if (curNode.next) {
        curNode.next.prev = node
        node.next = curNode.next
      }
      curNode.next = node
      node.prev = curNode
      return true
    }
  }

  public deleteHead (): DoublyLinkNode | null {
    const curNode = this.head
    if (curNode) {
      this.head = curNode.next
      if (this.head) {
        this.head.prev = null
      } else {
        this.tail = null
      }
    }
    return curNode
  }

  public deleteTail (): DoublyLinkNode | null {
    const curNode = this.tail
    if (curNode) {
      this.tail = curNode.prev
      if (this.tail) {
        this.tail.next = null
      } else {
        this.head = null
      }
    }
    return curNode
  }

  public deleteElement (element: any): DoublyLinkNode | null {
    let curNode = this.head
    while(curNode && curNode.element !== element) {
      curNode = curNode.next
    }
    if (!curNode || curNode.element !== element) return null
    if (curNode === this.head) {
      return this.deleteHead()
    } else if (curNode === this.tail) {
      return this.deleteTail()
    } else {
      if (curNode.prev) {
        curNode.prev.next = curNode.next
      }
      if (curNode.next) {
        curNode.next.prev = curNode.prev
      }
      return curNode
    }
  }

  public findNodeByElement (element: any): DoublyLinkNode | null {
    let curNode = this.head
    while (curNode && curNode.element !== element) {
      curNode = curNode.next
    }
    if (curNode && curNode.element === element) {
      return curNode
    } else {
      return null
    }
  }

  public findNodeByIndex (index: number): DoublyLinkNode | null {
    let curNode = this.head
    if (index > this.size() || index < 1) {
      return null
    }
    while (curNode && --index > 0) {
      curNode = curNode.next
    }
    return curNode
  }

  public display () {
    let curNode = this.head
    let i = 1
    while (curNode) {
      console.log(i++, curNode.element)
      curNode = curNode.next
    }
  }
}

const doublyLinkedList = new DoublyLinkedList()
console.log('isEmpty ', doublyLinkedList.isEmpty())
console.log('---------------------')
doublyLinkedList.insertHead(2)
console.log('isEmpty ', doublyLinkedList.isEmpty())
console.log('---------------------')
doublyLinkedList.insertTail(8)
console.log('size ', doublyLinkedList.size())
console.log('---------------------')
console.log(doublyLinkedList.insertIndex(1, 0))
console.log(doublyLinkedList.insertIndex(4, 2))
console.log(doublyLinkedList.insertIndex(16, 4))
console.log('---------------------')
console.log(doublyLinkedList.findNodeByElement(1))
console.log(doublyLinkedList.findNodeByElement(4))
console.log(doublyLinkedList.findNodeByElement(16))
console.log('---------------------')
console.log(doublyLinkedList.findNodeByIndex(0))
console.log(doublyLinkedList.findNodeByIndex(1))
console.log(doublyLinkedList.findNodeByIndex(5))
console.log('---------------------')
console.log(doublyLinkedList.size())
console.log('---------------------')
doublyLinkedList.display()
console.log(doublyLinkedList.deleteHead())
console.log(doublyLinkedList.deleteTail())
console.log(doublyLinkedList.deleteElement(4))
doublyLinkedList.display()
