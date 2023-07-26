/*
剑指 Offer 26. 树的子结构
输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
B是A的子结构， 即 A中有出现和B相同的结构和节点值。
例如:
给定的树 A:
     3
    / \
   4   5
  / \
 1   2
给定的树 B：
   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：
输入：A = [1,2,3], B = [3,1]
输出：false

示例 2：
输入：A = [3,4,5,1,2], B = [4,1]
输出：true
*/

import { TreeNode, buildTreeFromArray } from "./treeNode";

function isContain(a: TreeNode | null, b: TreeNode | null): boolean {
    if (b === null) return true;
    if (a === null || a.val !== b.val) return false;
    return isContain(a.left, b.left) && isContain(a.right, b.right);
}

function isSubStructure(a: TreeNode | null, b: TreeNode | null): boolean {
    if (a === null || b === null) return false;
    return isContain(a, b) || isSubStructure(a.left, b) || isSubStructure(a.right, b);
}

console.log(isSubStructure(
    buildTreeFromArray([1, 2, 3]),
    buildTreeFromArray([]),
));

console.log(isSubStructure(
    buildTreeFromArray([]),
    buildTreeFromArray([3, 1]),
));

console.log(isSubStructure(
    buildTreeFromArray([]),
    buildTreeFromArray([]),
));

console.log(isSubStructure(
    buildTreeFromArray([1, 2, 3]),
    buildTreeFromArray([3, 1]),
));

console.log(isSubStructure(
    buildTreeFromArray([3,4,5,1,2]),
    buildTreeFromArray([4,1]),
));
