"use strict";
/*
==============>>>>> Length of Last Word <<<<<<<==============
Easy
2.4K
137
Companies
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 */
function lengthOfLastWord(s) {
    const splicedInput = s.trim().replace('/\s+/g', ' ');
    const wordsArray = splicedInput.split(" "); //splits the sentence into array of words(takes space as refrence for each array)
    const output = (wordsArray[(wordsArray.length - 1)]).length; //returns the count of charater in the last word
    return output;
}
;
console.log(lengthOfLastWord("   fly me   to   the moon  "));
