/**
 * 
 * @param list1 
 * @param list2 
 * @returns 
 * 
 * 
 * ==================>Merge Two Sorted Lists<============
Easy
16.4K
1.5K
Companies
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 * 
 */


function mergeTwoLists(list1: number[], list2: Array<number>): Array<number> {
    const listA = list1
    const listB = list2
    let listC = list1.concat(list2)
    listC = listC.sort();
    return listC
};

console.log(mergeTwoLists([1, 2, 3], [2, 4, 6]))