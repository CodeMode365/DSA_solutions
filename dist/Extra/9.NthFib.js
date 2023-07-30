"use strict";
/*
Fibonacci Series:
Write a function to generate the nth term in the Fibonacci sequence using recursion.
*/
function nthFib(nth, memo = {}) {
    // let term = 0, a = 0, b = 1
    // if (nth == 0) return a
    // if (nth == b) return b
    // for (let i = 2; i <= nth; i++) {
    //     term = a + b
    //     a = b
    //     b = term
    // }
    // return term
    if (nth in memo)
        return memo[nth];
    if (nth <= 1)
        return nth;
    memo[nth] = nthFib(nth - 1, memo) + nthFib(nth - 2, memo);
    return memo[nth];
}
console.log(nthFib(10)); //55
console.log(nthFib(11)); //89
console.log(nthFib(12)); //144
console.log(nthFib(90)); //2880067194370816000
console.log(nthFib(150)); //9.969216677189305e+30
