/**

Permutations II
Medium
Companies
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

 

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

Constraints:

1 <= nums.length <= 8
-10 <= nums[i] <= 10
 */



function permuteUnique(nums: number[], comb: number[] = []): number[][] {

    let result: number[][] = [];
    if (nums.length <= 1) {
        return [comb.concat(nums)];
    }
    for (let indx = 0; indx < nums.length; indx++) {
        const newNums = nums.filter((_, index) => index !== indx);
        const newCombination = permuteUnique(newNums, comb.concat(nums[indx]));
        const uniquePermutations = new Set(result.map(item => JSON.stringify(item)));

        newCombination.forEach((item, index) => {
            const strItem = JSON.stringify(item);
            if (!uniquePermutations.has(strItem)) {
                result.push(item);
            }
        });
    }
    return result;
}

console.log(permuteUnique([1, 1, 3]))
console.log(permuteUnique([1, 2, 3]))
console.log(permuteUnique([1, 2, 3, 4]))

