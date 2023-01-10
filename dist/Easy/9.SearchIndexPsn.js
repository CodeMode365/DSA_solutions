"use strict";
/*
====================== > Search Insert Position  < ======================
Companies
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/
function searchInsert(nums, target) {
    // console.log(target)
    let output = 0;
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            output = i;
            break;
        }
        else if ((target > nums[i]) && (i == nums.length - 1)) {
            output = nums.length;
            break;
        }
    }
    // console.log(output)
    return output;
}
;
console.log(searchInsert([1, 3], 5));
