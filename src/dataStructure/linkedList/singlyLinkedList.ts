class SinglyLinkNode {
  public element: any
  public next: null | SinglyLinkNode

  constructor(element: any) {
    this.element = element
    this.next = null
  }
}

class SinglyLinkedList {
  private length: number
  private head: SinglyLinkNode | null
  constructor () {
    this.length = 0
    this.head = null
  }

  public size (): number {
    return this.length
  }

  public isEmpty (): boolean {
    return this.length === 0
  }

  public add (element: any): SinglyLinkNode {
    const node = new SinglyLinkNode(element)
    if (this.head === null) {
      this.head = node
    } else {
      let curNode = this.head
      while(curNode.next) {
        curNode = curNode.next
      }
      curNode.next = node
    }
    this.length++
    return node
  }

  public remove (element: any): SinglyLinkNode | null {
    let curNode = this.head
    let prevNode
    if (curNode === null) {
      return null
    }
    if (curNode.element === element) {
      this.head = curNode.next
    } else {
      while (curNode && curNode.element !== element) {
        prevNode = curNode
        curNode = curNode.next
      }
      if (curNode && prevNode) {
        prevNode.next = curNode.next
      }
    }
    this.length--
    return curNode
  }

  public indexOf (element: any) : number {
    let curNode = this.head
    let index = -1
    while (curNode !== null) {
      index++
      if (curNode.element === element) {
        return index + 1
      }
      curNode = curNode.next
    }
    return -1
  }

  public find (index: number): any {
    let curNode = this.head
    if (curNode === null || index < 1 || index > this.length) {
      return undefined
    }
    while (curNode && --index > 0) {
      curNode = curNode.next
    }
    if (curNode) {
      return curNode.element
    }
    return undefined
  }

  public addAt (element: any, index: number): boolean {
    const node = new SinglyLinkNode(element)
    let curNode = this.head
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === 0) {
      this.head = node
      node.next = curNode
    } else {
      let prevNode
      while (curNode && --index > 0) {
        prevNode = curNode
        curNode = curNode.next
      }
      if (curNode) {
        node.next = curNode
        if (prevNode) {
          prevNode.next = node
        }
      }
    }
    this.length++
    return true
  }

  public removeAt (index: number): any {
    let curNode = this.head
    if (curNode === null || index < 1 || index > this.length) {
      return null
    }
    if (index === 1) {
      this.head = curNode.next
    }
    let prevNode
    while (curNode && --index > 0) {
      prevNode = curNode
      curNode = curNode.next
    }
    if (curNode && prevNode) {
      prevNode.next = curNode.next
    }
    if (curNode) {
      this.length--
      return curNode.element
    }
    return null
  }

  public view () {
    let curNode = this.head
    while(curNode !== null) {
      console.log(curNode.element)
      curNode = curNode.next
    }
  }

  // 递归反序遍历
  public viewReverse (node = this.head) {
    if (node !== null) {
      this.viewReverse(node.next)
      console.log(node.element)
    }
  }

  // 反转链表
  public reverse() {
    let curNode = this.head
    if (curNode === null) {
      return null
    }

    let prevNode = null
    let nextNode = null

    while (curNode !== null) {
      nextNode = curNode.next
      curNode.next = prevNode
      prevNode = curNode
      curNode = nextNode
    }
    this.head = prevNode
  }
}

export default SinglyLinkedList

const linkedList = new SinglyLinkedList()
console.log(linkedList.isEmpty())
console.log('---------------------')
linkedList.add(2)
linkedList.add(5)
linkedList.add(8)
linkedList.add(12)
linkedList.add(17)
console.log(linkedList.isEmpty())
console.log('---------------------')
console.log(linkedList.size())
console.log('---------------------')
console.log(linkedList.removeAt(4))
console.log('---------------------')
linkedList.addAt(-1, 0)
console.log(linkedList.indexOf(-1))
console.log('---------------------')
console.log(linkedList.removeAt(1))
console.log('---------------------')
linkedList.addAt(15, 4)
console.log(linkedList.find(4))
console.log('---------------------')
console.log(linkedList.size())
console.log('---------------------')
linkedList.view()
console.log('---------------------')
linkedList.reverse()
linkedList.viewReverse()
