'''
 Majority Element
Easy
16.5K
479
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
'''

from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        newList = nums.copy()
        target = len(nums) / 2
        store = dict()
        result = int()

        for item in nums:
            if(item in store):
                if((store[item]+1)>= target):
                    result = item
                    break
                store[item]+=1
            else:
                store[item] = 1
        
        if(not result):
            result = newList[0]
        print(result)
        return result


inst = Solution()
inst.majorityElement([2,2,1,1,1,2,2])
inst.majorityElement([3,2,3])
inst.majorityElement([1])
