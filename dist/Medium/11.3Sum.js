"use strict";
/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

*/
function threeSum(nums) {
    const input = [...nums.sort((a, b) => a - b)];
    const store = {};
    const output = [];
    //two pointer method : optomized into n^2
    for (let a = 0; a < input.length - 2; a++) {
        let b = a + 1;
        let c = input.length - 1;
        while (b < c) {
            const sum = input[a] + input[b] + input[c];
            if (sum == 0) {
                const triplet = [input[a], input[b], input[c]].sort((a, b) => a - b).join(',');
                if (!store.hasOwnProperty(triplet)) {
                    store[triplet] = triplet;
                    output.push([input[a], input[b], input[c]]);
                }
            }
            if (sum < 0) {
                b++;
            }
            else {
                c--;
            }
        }
    }
    return output;
}
;
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, -2, -3, 0, 1, 2, 3])); // [[ -3, 0, 3 ], [ -3, 1, 2 ], [ -2, -1, 3 ], [ -2, 0, 2 ], [ -1, 0, 1 ] ]
