"use strict";
/**
     ============================> Single Number <============================
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
 */
function singleNumber(nums) {
    const Input = [...nums].sort((a, b) => a - b); //sort the given array and store into temp variable
    let output; //declare output var
    for (let i = 0; i <= Input.length; i += 2) {
        if (Input[i] !== Input[i + 1]) { //if two values doesnot match break and set output
            output = Input[i];
            break;
        }
        ;
    }
    console.log(output);
    return output;
}
singleNumber([2, 3, 4, 5, 5, 4, 3, 2, 7]);
