/*
====================>Excel Sheet Column Title<====================
Easy
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"
*/
function convertToTitle(columnNumber: number): string {
    let output: string = ""
    let col1: string | undefined = undefined
    let col2: string | undefined = undefined
    if (columnNumber.toLocaleString().length > 1) {
        col1 = String.fromCharCode(Math.floor(columnNumber / 26) + 64)
        col2 = String.fromCharCode((columnNumber % 26) + 64)
    } else {
        col1 = String.fromCharCode(columnNumber + 64)
    }
    output += col1
    if (col2) output += col2

    return output
};

console.log(convertToTitle(2))

// const ch = "A"
// console.log(ch.charCodeAt(0))