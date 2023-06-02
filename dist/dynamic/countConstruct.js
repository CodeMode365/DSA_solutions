"use strict";
/**
 * Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.
 *
 * The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.
 *
 * You may reuse elements of `wordBank` as many time as needed.
 */
function countConstruct(target, wordBank) {
    if (target === "")
        return 1;
    let count = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            const result = countConstruct(target.slice(word.length), wordBank);
            count += result;
        }
    }
    return count;
}
function memoCountConstruct(target, wordBank, store = {}) {
    if (target in store)
        return store[target];
    if (target == "")
        return 1;
    let count = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            const result = memoCountConstruct(target.slice(word.length), wordBank, store);
            count += result;
        }
    }
    store[target] = count;
    return count;
}
console.log(memoCountConstruct("eeeeeeeeeeeeeeeeeeeeeee", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeee",
]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeee", ["e", "ee", "eee", "eeee", "eeee"]));
/**
 *
 * Tabulation Solutio
 *
 * m=target length
 * n=words length
 *
 * Compleixty
 *  Time: m*n*m //extract m is due to slicing
 *  Space: m
 */
function tabCountConstruct(target, wordBank) {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (let x = 0; x <= target.length; x++) {
        for (let word of wordBank) {
            if (target.slice(x, x + word.length) == word) {
                table[x + word.length] += table[x];
            }
        }
    }
    return table[target.length];
}
console.log(tabCountConstruct("purple", ["pur", "p", "ur", "le", "purpl"])); //2
console.log(tabCountConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //`
