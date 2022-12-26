/*
Reverse Integer
Medium
9.3K
11.3K
Companies
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

*/

function reverse(x: number): number {
    let Input = x.toString() //convert input into sting
    let negative: boolean = false
    if (Input[0] == "-") Input.replace("-", ""), negative = true //remove -ve and set negative to true
    console.log(Input)
    let output: string | number = ""

    for (let i = Input.length - 1; i >= 0; i--) {
        output += Input[i]
    }
    output = parseInt(output) //convert the output into integer 
    if (negative) output -= output * 2
    if (output >= 2147483647 || output <= -2147483647) return 0 //exceding the integer range
    else return output
};

console.log(reverse(1534236469))