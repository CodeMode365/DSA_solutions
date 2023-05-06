"use strict";
//  BigO(nlogn)
// Divide and  Conquore
const items = [1, 23, 4, 5, 465, 45, 34, 5, 23, 65, 43, 56, 33];
// logn
function mergeSort(arr) {
    if (arr.length < 2)
        return arr;
    const midIndex = Math.floor(arr.length / 2);
    const left = arr.slice(0, midIndex);
    const right = arr.slice(midIndex, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}
// n
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex += 1;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex += 1;
        }
    }
    //concatinate the ramaining items
    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}
console.log(mergeSort(items));
