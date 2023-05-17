"use strict";
/**
 * Write a function `allConstruct(target,wordBank)` that accepts a target string and an array of strings.
 *
 * The function should return a 2D array containing all of the ways that the `target` can be constructed by concatentating elements of the `wordBank` ways.
 * Each element of the 2D array should represent one combination that constructs the `target`.
 *
 */
/**
 * m = target.length
 * n = worBank.length
 *
 * Bruteforce Complexity
 * Time: O(n^m * m)
 * Space: O( m )
 *
 * Memoized Compleixty
 * Time: O(n^m)
 * Space: O( m * m)
 */
function allConstruct(target, wordBank) {
    if (target == "")
        return [[]];
    const final = [];
    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            const result = allConstruct(target.slice(word.length), wordBank);
            const comb = result.map((res) => [word, ...res]);
            final.push(...comb);
        }
    }
    return final;
}
function memoAllConstruct(target, wordBank, memory = {}) {
    if (target in memory)
        return memory[target];
    if (target == "")
        return [[]];
    const final = [];
    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            const result = memoAllConstruct(target.slice(word.length), wordBank, memory);
            const comb = result.map((res) => [word, ...res]);
            final.push(...comb);
        }
    }
    memory[target] = final;
    return final;
}
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(memoAllConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaaaaaa",
    "aaaaaaaaaa",
    "aaaaaaaaaaa",
]));
