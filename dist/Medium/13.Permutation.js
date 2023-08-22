"use strict";
/**
 * 46. Permutations
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
 */
function permute(nums, comb = []) {
    const result = [];
    if (comb.length === nums.length)
        return [[...comb]];
    for (let item of nums) {
        if (!comb.includes(item)) {
            result.push(...permute(nums, [...comb, item]));
        }
    }
    return result;
}
console.log(permute([1, 2, 3])); //[[ 1, 2, 3 ],[ 1, 3, 2 ],[ 2, 1, 3 ],[ 2, 3, 1 ],[ 3, 1, 2 ],[ 3, 2, 1 ]]
console.log(permute([1])); //[[1]]
