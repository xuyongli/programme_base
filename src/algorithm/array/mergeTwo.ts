/*
 * 合并两个有序数组
 */
function mergeTwo(arr1: number[], arr2: number[]) {
    const arr: number[] = [];
    while(arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            arr.push(arr1.shift()!);
        } else {
            arr.push(arr2.shift()!);
        }
    }
    return arr.concat(arr1).concat(arr2);
}

/*
 * 合并二维有序数组成一维有序数组 
 */
function mergeArr(arrs: number[][]){
    if (arrs.length === 1) return arrs[0];
    let arr: number[] = [];
    while(arrs.length) {
        const arr1 = arrs.shift();
        arr = mergeTwo(arr, arr1!);
    }
    return arr;
}

// [1,2,2,3,5,6]
console.log(mergeTwo([1,2,3], [2,5,6]));
console.log(mergeArr([[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6]]))
console.log(mergeArr([[1,4,6],[7,8,10],[2,6,9],[3,7,13],[1,5,12]]))
