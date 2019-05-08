class Stack {
  private top: number
  private stack: any[]

  constructor () {
    this.top = 0
    this.stack = []
  }

  /**
   * push
   */
  public push(element: any) {
    this.stack[this.top++] = element
  }

  /**
   * pop
   */
  public pop(): any {
    if (this.top === 0) {
      throw new Error('empty stack')
    }
    this.top--
    const element = this.stack[this.top]
    // this.stack.length = this.top
    delete this.stack[this.top]
    return element
  }

  /**
   * peek
   */
  public peek(): any {
    if (this.top === 0) {
      throw new Error('empty stack')
    }
    return this.stack[this.top - 1]
  }

  /**
   * size
   */
  public size(): number {
    return this.top
  }

  /**
   * view
   */
  public view() {
    for (let i = 0; i < this.stack.length; i++) {
      const element = this.stack[i]
      console.log(i, element)
    }
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(stack.size())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
stack.push(5)
console.log(stack.peek())
stack.view()
