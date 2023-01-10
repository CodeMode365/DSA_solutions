/**
 =====================>Longest Common Prefix<=====================
Easy
12K
3.6K
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
 */
function longestCommonPrefix(strs: string[]): string {
    let shortestInput: string = strs[0]
    for (let i = 1; i < strs.length; i++) {
        if (shortestInput.length >= strs[i].length) shortestInput = strs[i]
    }


    const Output: string = ""
    for (let i = 0; i < shortestInput.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (shortestInput[0] == strs[j][i]) {
                
            }
        }
    }

    return Output
};
console.log(longestCommonPrefix(['Ram', 'ramayan', 'ramter']))