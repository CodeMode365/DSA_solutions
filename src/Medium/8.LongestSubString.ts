/*
3. Longest Substring Without Repeating Characters
Medium
Companies
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

interface iMemo {
    longest: number
}

function lengthOfLongestSubstring(s: string, memo = { longest: 0 }): number {
    if (s == '') return memo['longest']
    let longestStr = ''
    for (let x of s.split('')) {
        if (!longestStr.includes(x)) longestStr += x
        else break;
    }
    if (longestStr.length > memo['longest'])
        memo['longest'] = longestStr.length
    return lengthOfLongestSubstring(s.slice(1, s.length), memo)
};

console.log(lengthOfLongestSubstring('eleven')) // 3
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb')) // 1