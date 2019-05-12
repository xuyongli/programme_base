
class Queue {
  private queue: any[]

  constructor() {
    this.queue = []
  }

  /**
   * enqueue
   */
  public enqueue(element: any) {
    this.queue[this.queue.length] = element
  }

  /**
   * dequeue
   */
  public dequeue() {
    if (this.queue.length === 0) {
      throw new Error('Empty queue')
    }
    const element = this.queue[0]
    this.queue.splice(0,1)
    return element
  }

  /**
   * peek
   */
  public peek() {
    if (this.queue.length === 0) {
      throw new Error('Empty queue')
    }
    return this.queue[0]
  }

  /**
   * length
   */
  public length() {
    return this.queue.length
  }

  /**
   * view
   */
  public view() {
    console.log(this.queue)
  }
}


const myQueue = new Queue()

myQueue.enqueue(1)
myQueue.enqueue(5)
myQueue.enqueue(76)
myQueue.enqueue(69)
myQueue.enqueue(32)
myQueue.enqueue(54)

myQueue.view()

console.log("Length: " + myQueue.length())
console.log("Front item: " + myQueue.peek())
console.log("Removed " + myQueue.dequeue() + " from front.")
console.log("New front item: " + myQueue.peek())
console.log("Removed " + myQueue.dequeue() + " from front.")
console.log("New front item: " + myQueue.peek())
myQueue.enqueue(55)
console.log("Inserted 55")
console.log("New front item: " + myQueue.peek())

for (var i = 0; i < 5; i++) {
  myQueue.dequeue()
  myQueue.view()
}

//console.log(myQueue.dequeue()) // throws exception!