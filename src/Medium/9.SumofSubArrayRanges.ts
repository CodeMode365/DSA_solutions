/*
2104. Sum of Subarray Ranges
Medium
1.9K
92
Companies
You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray.

Return the sum of all subarray ranges of nums.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,2,3]
Output: 4
Explanation: The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0 
[2], range = 2 - 2 = 0
[3], range = 3 - 3 = 0
[1,2], range = 2 - 1 = 1
[2,3], range = 3 - 2 = 1
[1,2,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4.
Example 2:

Input: nums = [1,3,3]
Output: 4
Explanation: The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0
[3], range = 3 - 3 = 0
[3], range = 3 - 3 = 0
[1,3], range = 3 - 1 = 2
[3,3], range = 3 - 3 = 0
[1,3,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 2 + 0 + 2 = 4.
Example 3:

Input: nums = [4,-2,-3,4,1]
Output: 59
Explanation: The sum of all subarray ranges of nums is 59.
 

Constraints:

1 <= nums.length <= 1000
-109 <= nums[i] <= 109

*/

function subArrayRanges(nums: number[]): number {
    const main: number[] = []
    let counter = 0

    while (counter < nums.length) {
        for (let ind in nums) {
            const currentIndex = Number(ind)
            if (currentIndex - counter >= 0) {
                const subArr = nums.slice(currentIndex - counter, currentIndex + 1)
                const assending = subArr.sort((a, b) => a - b)
                main.push(assending[assending.length - 1] - assending[0])
            }
        }
        counter++
    }


    const result = main.reduce((acc, item) => acc += item)
    return result
};


console.log(subArrayRanges([1, 3, 3])) //4
console.log(subArrayRanges([1, 2, 3])) //4
console.log(subArrayRanges([4, -2, -3, 4, 1])) //59

//NOt solved due to large Space Complexity in nums
//Time Limit Exceeded