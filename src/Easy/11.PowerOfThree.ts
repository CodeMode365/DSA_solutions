/*
==========> Power of Three <====================
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33
Example 2:

Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.
Example 3:

Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).
 */

function isPowerOfThree(n: number): boolean {
    for (let i = 0; i < n; i++) {
        if (3 ** i <= n) {
            if (3 ** i == n) return true
        }
        else if (3 ** i > n) break
    }
    // console.log(powers)
    return false
}

console.log(isPowerOfThree(129140164))
