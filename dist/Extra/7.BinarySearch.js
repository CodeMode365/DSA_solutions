"use strict";
/**
 Binary Search:
 Implement a binary search function to find the index of a given element in a sorted array. If the element is not in the
 array, return -1.
 */
function binSearch(arr, target, start, end) {
    // if (arr.length === 0) return -1;
    // if (!isSorted(arr)) throw new Error('Input array must be sorted');
    // let start = 0;
    // let end = arr.length - 1;
    // while (start <= end) {
    //     const mid = Math.floor((start + end) / 2);
    //     if (arr[mid] === target) return mid;
    //     if (target > arr[mid]) {
    //         start = mid + 1;
    //     }
    //     if (target < arr[mid]) {
    //         end = mid - 1;
    //     }
    // }
    // return -1;
    if (!isSorted(arr))
        throw new Error("Given array not sorted");
    if (!start)
        start = 0;
    if (!end)
        end = arr.length - 1;
    const mid = Math.floor((start + end) / 2);
    if (arr.length == 0) {
        return -1;
    }
    if (start == end) {
        if (arr[start] !== target)
            return -1;
        return start;
    }
    if (arr[mid] == target)
        return mid;
    if (target < arr[mid]) {
        end = mid - 1;
        return binSearch(arr, target, start, end);
    }
    if (target > arr[mid]) {
        start = mid + 1;
        return binSearch(arr, target, start, end);
    }
    return -1;
}
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(binSearch([1, 5, 7, 12, 18, 23, 45, 59, 72, 82, 94, 95, 96], 23)); // 5
console.log(binSearch([1, 5, 7, 12, 18, 23, 45, 59, 72, 82, 94, 95, 96], 96)); // 12
console.log(binSearch([1, 5, 7, 12, 18, 23, 45, 59, 72, 82, 94], 48)); // -1
console.log(binSearch([1, 5, 7, 12, 18, 23, 45, 59, 72, 82, 94], 1)); // 0
console.log(binSearch([1, 5, 7, 12, 18, 23, 45, 59, 72, 82, 94], 59)); // 7
console.log(binSearch([100, 123, 234, 454, 500, 675, 700, 789, 885], 675)); //5
