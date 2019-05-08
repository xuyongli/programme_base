class TreeNode {
  private value: any
  public left: TreeNode | null
  public right: TreeNode | null

  constructor (value: any) {
    this.value = value
    this.left = null
    this.right = null
  }

  /**
   * search
   */
  public search(value: any): TreeNode | null {
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
  public add(node: TreeNode) {
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

class Tree {
  root: TreeNode | null

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
  public search(value: any): TreeNode | null {
    if (this.root === null) {
      throw new Error('Empty Tree')
    }
    return this.root.search(value)
  }

  /**
   * add
   */
  public add(value: any): TreeNode {
    const node = new TreeNode(value)
    if (this.root === null) {
      this.root = node
    } else {
      this.root.add(node)
    }
    return node
  }
}

var bst = new Tree()
bst.add(6)
bst.add(3)
bst.add(9)
bst.add(2)
bst.add(8)
bst.add(4)
bst.traverse()

console.log(bst.search(8))
