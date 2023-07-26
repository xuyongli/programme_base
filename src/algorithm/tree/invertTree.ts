/*
226. 翻转二叉树
给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。 

示例 1：
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]

示例 2：
输入：root = [2,1,3]
输出：[2,3,1]

示例 3：
输入：root = []
输出：[]
*/

import { TreeNode, buildTreeFromArray, toArray } from "./treeNode";

function invertTree(root: TreeNode | null) {
    if (root === null) return null;
    [root.left, root.right] = [root.right, root.left];
    if (root.left) invertTree(root.left);
    if (root.right) invertTree(root.right);
    return root;
}

const root = buildTreeFromArray([4,2,7,1,3,6,9]);
console.log(toArray(invertTree(root)));
// [4,7,2,9,6,3,1]

const root1 = buildTreeFromArray([2,1,3]);
console.log(toArray(invertTree(root1)));
// [2,3,1]

const root2 = buildTreeFromArray([]);
console.log(toArray(invertTree(root2)));
// []
