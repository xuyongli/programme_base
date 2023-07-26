export class TreeNode {
    constructor(
        public val: number,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null,
    ) {}
}

// 从层序遍历数组构建二叉树
export function buildTreeFromArray(nums: Array<number | null>) {
    if (nums.length === 0 || nums[0] === null) {
        return null;
    }
    const root = new TreeNode(nums[0]);
    const queue = [root];
    let i = 1;
    while (i < nums.length) {
        const node = queue.shift()!;
        if (nums[i] !== null) {
            node.left = new TreeNode(nums[i]!);
            queue.push(node.left);
        }
        i++;
        if (i < nums.length && nums[i] !== null) {
            node.right = new TreeNode(nums[i]!);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// 层序遍历二叉树
export function toArray(root: TreeNode | null) {
    if (root === null) {
        return [];
    }
    const arr: Array<number | null> = [root.val];
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift()!;
        if (node.left !== null) {
            arr.push(node.left.val);
            queue.push(node.left);
        } else {
            arr.push(null);
        }
        if (node.right !== null) {
            arr.push(node.right.val);
            queue.push(node.right);
        } else {
            arr.push(null);
        }
    }
    while (arr[arr.length - 1] === null) {
        arr.pop();
    }
    return arr;

}

// const root = buildTreeFromArray([1, 2, 4, 5, 6, 7, 8]);

// 1. 深度优先遍历
// 1.1 前序遍历
// 1.1.1 递归法

// function traverse(node: TreeNode | null, res: number[] = []) {
//     if (node) {
//         res.push(node.val);
//         traverse(node.left, res);
//         traverse(node.right, res);
//     }
//     return res;
// }
// console.log(traverse(root));
// // [1, 2, 5, 6, 4, 7, 8]

// 1.1.2 迭代法

// function traverse(node: TreeNode | null) {
//     const res: number[] = [];
//     const stack: TreeNode[] = [];
//     if (node === null) return res;
//     stack.push(node);
//     while(stack.length) {
//         const { val, left, right } = stack.pop()!;
//         res.push(val);
//         if (right) stack.push(right);
//         if (left) stack.push(left);
//     }
//     return res;
// }
// console.log(traverse(root));
// // [1, 2, 5, 6, 4, 7, 8]

// 1.2 中序遍历
// 1.2.1 递归法

// function traverse(node: TreeNode | null, res: number[] = []) {
//     if (node) {
//         traverse(node.left, res);
//         res.push(node.val);
//         traverse(node.right, res);
//     }
//     return res;
// }
// console.log(traverse(root));
// // [5, 2, 6, 1, 7, 4, 8]

// 1.2.2 迭代法

// function traverse(node: TreeNode | null) {
//     const res: number[] = [];
//     const stack: TreeNode[] = [];
//     if (node === null) return res;
//     let cur = root;
//     while(cur || stack.length) {
//         if (cur) {
//             stack.push(cur);
//             cur = cur.left;
//         } else {
//             cur = stack.pop()!;
//             res.push(cur.val);
//             cur = cur.right;
//         }
//     }
//     return res;
// }
// console.log(traverse(root));
// // [5, 2, 6, 1, 7, 4, 8]

// 1.3 后序遍历
// 1.3.1 递归法

// function traverse(node: TreeNode | null, res: number[] = []) {
//     if (node) {
//         traverse(node.left, res);
//         traverse(node.right, res);
//         res.push(node.val);
//     }
//     return res;
// }
// console.log(traverse(root));
// // [5, 6, 2, 7, 8, 4, 1]

// 1.3.2 迭代法

// function traverse(node: TreeNode | null) {
//     const res: number[] = [];
//     const stack: TreeNode[] = [];
//     if (node === null) return res;
//     stack.push(node);
//     while(stack.length) {
//         const { val, left, right } = stack.pop()!;
//         res.push(val);
//         if (left) stack.push(left);
//         if (right) stack.push(right);
//     }
//     return res.reverse();
// }
// console.log(traverse(root));
// // [5, 6, 2, 7, 8, 4, 1]

// 2. 广度优先遍历，层序遍历

// function traverse(node: TreeNode | null) {
//     const res: number[] = [];
//     const queue: TreeNode[] = [];
//     if (node) queue.push(node);
//     while (queue.length) {
//         const len = queue.length;
//         for(let i = 0; i < len; i++) {
//             const { val, left, right } = queue.shift()!;
//             res.push(val);
//             if (left) queue.push(left);
//             if (right) queue.push(right);
//         }
//     }
//     return res;
// }
// console.log(traverse(root));
// // [1, 2, 4, 5, 6, 7, 8]
