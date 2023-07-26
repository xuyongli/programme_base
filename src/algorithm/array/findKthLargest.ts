/*
215. 数组中的第K个最大元素
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

 示例 1:
输入: [3,2,1,5,6,4], k = 2
输出: 5

示例 2:
输入: [3,2,3,1,2,4,5,5,6], k = 4
输出: 4

提示：
1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/

function findKthLargest(arr: number[], k: number) {
    return qickSelect(arr, 0, arr.length - 1, arr.length - k);
}

function qickSelect(arr: number[], left: number, right: number, idx: number) {
    if (left === right) return arr[left];
    let middle = Math.floor(Math.random() * (right - left + 1)) + left;
    middle = sort(arr, left, right, middle);
    if (middle === idx) return arr[middle];
    if (idx < middle) return qickSelect(arr, left, middle - 1, idx);
    return qickSelect(arr, middle + 1, right, idx);
}

function sort(arr: number[], left: number, right: number, middle: number) {
    const middleValue = arr[middle];
    [arr[middle], arr[right]] = [arr[right], arr[middle]];

    let index = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < middleValue) {
            [arr[index], arr[i]] = [arr[i], arr[index]];
            index++;
        }
    }

    [arr[index], arr[right]] = [arr[right], arr[index]];
    return index;
}

console.log(findKthLargest(
    [3,2,1,5,6,4],
    2,
));


console.log(findKthLargest(
    [3,2,3,1,2,4,5,5,6],
    4,
));
