import { TreeNode, buildTreeFromArray } from "./treeNode";

function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

const root = buildTreeFromArray([3,9,20,null,null,15,7]);
console.log(maxDepth(root))
// 3
