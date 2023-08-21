"use strict";
/**
 Longest Palindromic Substring
Medium
Given a string s, return the longest
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */
function longestPalidrome(s) {
    let longestPal = "";
    for (let right = s.length - 1; right >= 0; right--) {
        for (let left = 0; left <= right; left++) {
            const substring = s.slice(left, right + 1);
            if (substring.length > longestPal.length) {
                if (isPalindrome(substring)) {
                    longestPal = substring;
                }
            }
            else {
                break;
            }
        }
    }
    return longestPal;
}
function isPalindrome(s) {
    let isPal = true;
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            isPal = false;
            break;
        }
    }
    return isPal;
}
console.log(longestPalidrome("babad"));
console.log(longestPalidrome(""));
console.log(longestPalidrome("x")); //x
console.log(longestPalidrome("madaskaraksad"));
console.log(longestPalidrome("cbbd"));
console.log(longestPalidrome("racecar")); //racecar
console.log(longestPalidrome("aaaaaa")); //aaaaaa
console.log(longestPalidrome("abcdefg")); //
// console.log("x".slice(0, 1))
