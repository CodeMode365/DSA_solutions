'''
 2. Add Two Numbers
Medium
28K
5.4K
Companies
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse orderand each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
Accepted
3.9M
Submissions
9.4M
Acceptance Rate
41.1%
 '''


# Definition for singly-linked list.
from typing import Optional
import math


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        resulting = []
        carry = 0
        while (l1 or l2 or carry):
            sum = 0

            if (l1):
                sum += l1.val
                l1 = l1.next

            if (l2):
                sum += l2.val
                l2 = l2.next

            sum += carry
            carry = math.floor(sum/10)
            sum = sum % 10
            resulting.append(sum)

        index = 0
        finalList = ListNode(resulting[index])
        current = finalList
        while index < len(resulting) - 1:
            if resulting[index + 1] >= 0:
                current.next = ListNode(resulting[index + 1])
                current = current.next
            index += 1
            
        return finalList


list1 = ListNode(4)
list1.next = ListNode(5)
list1.next.next = ListNode(6)

list2 = ListNode(4)
list2.next = ListNode(5)
list2.next.next = ListNode(6)

sol = Solution()
sol.addTwoNumbers(list1, list2)
