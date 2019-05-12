class BinaryTreeNode {
  private value: number

  public left: BinaryTreeNode | null
  public right: BinaryTreeNode | null

  constructor (value: number) {
    this.value = value
    this.left = null
    this.right = null
  }

  /**
   * search
   */
  public search(value: number): BinaryTreeNode | null {
    if (this.value === value) {
      return this
    } else if (value < this.value && this.left) {
      return this.left.search(value)
    } else if (value > this.value && this.right) {
      return this.right.search(value)
    }
    return null
  }

  /**
   * visit
   */
  public visit() {
    if (this.left) {
      this.left.visit()
    }
    console.log(this.value)
    if (this.right) {
      this.right.visit()
    }
  }

  /**
   * add
   */
  public add(node: BinaryTreeNode) {
    if (node.value < this.value) {
      if (this.left === null) {
        this.left = node
      } else {
        this.left.add(node)
      }
    } else if (node.value > this.value) {
      if (this.right === null) {
        this.right = node
      } else {
        this.right.add(node)
      }
    }
  }
}

class BinaryTree {
  root: BinaryTreeNode | null

  constructor () {
    this.root = null
  }

  /**
   * traverse
   */
  public traverse() {
    if (this.root === null) {
      throw new Error('Empty Tree')
    }
    this.root.visit()
  }

  /**
   * search
   */
  public search(value: number): BinaryTreeNode | null {
    if (this.root === null) {
      throw new Error('Empty Tree')
    }
    return this.root.search(value)
  }

  /**
   * add
   */
  public add(value: number): BinaryTreeNode {
    const node = new BinaryTreeNode(value)
    if (this.root === null) {
      this.root = node
    } else {
      this.root.add(node)
    }
    return node
  }
}

const binaryTree = new BinaryTree()
binaryTree.add(6)
binaryTree.add(3)
binaryTree.add(9)
binaryTree.add(2)
binaryTree.add(8)
binaryTree.add(4)
binaryTree.traverse()

console.log(binaryTree.search(8))
