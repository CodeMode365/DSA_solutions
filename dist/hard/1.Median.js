"use strict";
/**
 * ==================> Median of Two Sorted Arrays <===============
 Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */
function findMedianSortedArrays(nums1, nums2) {
    const input = nums1.concat(nums2).sort((a, b) => a - b);
    const medianIndex = ((input.length + 1) / 2) - 1; //To match the median for array we subtract 1 at last as index starts from 0
    let median = 0;
    if (/[.]+/.test(medianIndex.toString())) { //check if the median index is decimal value
        const index1 = Math.floor(medianIndex);
        const index2 = Math.ceil(medianIndex);
        median = (input[index1] + input[index2]) / 2;
    }
    else {
        median = input[medianIndex];
    }
    // console.log(/[.]+/.test(medianIndex.toString()))
    return median;
}
console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6, 8]));
// findMedianSortedArrays([1, 2, 3], [2, 5, 7])
