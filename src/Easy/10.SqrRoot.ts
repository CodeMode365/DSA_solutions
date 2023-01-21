/**
  Sqrt(x)
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned. 
 
 */

function mySqrt(x: number): number {
  for (let i = x; i >= 0; i--) {
    if (Math.floor(Math.round(Math.log(x) / Math.log(i))) == 2) return i
  }
  return 0

}
// console.log(mySqrt(25))
// console.log(Math.log(4))
console.log(Math.floor(parseInt(`${Math.log(25) / Math.log(1)}`)))