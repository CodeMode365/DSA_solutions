"use strict";
/**
 =================>Palindrome Number<=========
 Easy
 8.2K
 2.4K
 Companies
 Given an integer x, return true if x is a
 palindrome
 , and false otherwise.
 
  
 
 Example 1:
 
 Input: x = 121
 Output: true
 Explanation: 121 reads as 121 from left to right and from right to left.
 Example 2:
 
 Input: x = -121
 Output: false
 Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 Example 3:
 
 Input: x = 10
 Output: false
 Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 *
 */
function isPalindrome(x) {
    const param = x.toString();
    let out = "";
    for (let i = param.length - 1; i >= 0; i--) {
        out += param[i];
    }
    console.log(out);
    if (parseInt(out) == x) {
        return true;
    }
    return false;
}
;
console.log(isPalindrome(121));
