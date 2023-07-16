class BinaryTreeNode {
  public value: number;
  public left: BinaryTreeNode | null;
  public right: BinaryTreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * search
   */
  public search(value: number): BinaryTreeNode | null {
    if (this.value === value) {
      return this;
    } else if (value < this.value && this.left) {
      return this.left.search(value);
    } else if (value > this.value && this.right) {
      return this.right.search(value);
    }
    return null;
  }

  /**
   * visit
   */
  public visit() {
    if (this.left) {
      this.left.visit();
    }
    console.log(this.value);
    if (this.right) {
      this.right.visit();
    }
  }

  /**
   * add
   */
  public add(node: BinaryTreeNode) {
    if (node.value < this.value) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.add(node);
      }
    } else if (node.value > this.value) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.add(node);
      }
    }
  }
}

class BinaryTree {
  root: BinaryTreeNode | null;

  constructor() {
    this.root = null;
  }

  /**
   * traverse
   */
  public traverse() {
    if (this.root === null) {
      throw new Error("Empty Tree");
    }
    this.root.visit();
  }

  /**
   * search
   */
  public search(value: number): BinaryTreeNode | null {
    if (this.root === null) {
      throw new Error("Empty Tree");
    }
    return this.root.search(value);
  }

  /**
   * add
   */
  public add(value: number): BinaryTreeNode {
    const node = new BinaryTreeNode(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.root.add(node);
    }
    return node;
  }
}

const binaryTree = new BinaryTree();
[5, 4, 6, 1, 2, 7, 8].forEach((element) => binaryTree.add(element));
// binaryTree.traverse()
// console.log(binaryTree.search(8))

// 深度优先遍历

// 前序遍历--递归法
function traverse1(node: BinaryTreeNode | null) {
  if (node === null) return;
  console.log(node.value);
  traverse1(node.left);
  traverse1(node.right);
}
console.log("前序遍历");
traverse1(binaryTree.root);

// 前序遍历--迭代法
function traverse1_1(root: BinaryTreeNode | null): number[] {
  const array: number[] = [];
  const stack: BinaryTreeNode[] = [];
  if (root === null) return array;
  stack.push(root);
  while (stack.length) {
    const node = stack.pop()!;
    array.push(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return array;
}
console.log(traverse1_1(binaryTree.root));

// 2. 中序遍历--递归法
function traverse2(node: BinaryTreeNode | null) {
  if (node === null) return;
  traverse2(node.left);
  console.log(node.value);
  traverse2(node.right);
}
console.log("中序遍历");
traverse2(binaryTree.root);

// 中序遍历--迭代法
function traverse2_1(root: BinaryTreeNode | null): number[] {
  const array: number[] = [];
  const stack: BinaryTreeNode[] = [];
  let curNode = root;
  while (curNode || stack.length) {
    if (curNode !== null) {
      stack.push(curNode);
      curNode = curNode.left;
    } else {
      curNode = stack.pop()!;
      array.push(curNode.value);
      curNode = curNode.right;
    }
  }
  return array;
}
console.log(traverse2_1(binaryTree.root));

// 后序遍历
function traverse3(node: BinaryTreeNode | null) {
  if (node === null) return;
  traverse3(node.left);
  traverse3(node.right);
  console.log(node.value);
}
console.log("后序遍历");
traverse3(binaryTree.root);

// 后序遍历--迭代法
function traverse3_1(root: BinaryTreeNode | null): number[] {
  const array: number[] = [];
  const stack: BinaryTreeNode[] = [];
  if (root === null) return array;
  stack.push(root);
  while (stack.length) {
    const node = stack.pop()!;
    array.push(node.value);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return array.reverse();
}
console.log(traverse3_1(binaryTree.root));

// 广度优先遍历
// 层序遍历
function traverse4(root: BinaryTreeNode | null) {
  const array: number[][] = [];
  const queue: BinaryTreeNode[] = [];
  if (root !== null) queue.push(root);
  while (queue.length) {
    const length = queue.length;
    const sub: number[] = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift()!;
      sub.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    array.push(sub);
  }
  return array;
}
console.log(traverse4(binaryTree.root));
