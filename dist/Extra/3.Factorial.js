"use strict";
/**
 * Factorial: Write a function to calculate the factorial of a non-negative integer using recursion.
 */
function factorial(target) {
    if (target <= 1)
        return target;
    return target * factorial(target - 1);
}
console.log(3); //3*2*1
console.log(factorial(5)); //5*4*3*2*1
console.log(factorial(12)); //12*11*10*9*8*7*6*5*4*3*2*1
