"use strict";
/**
 Write a function `bestSum(targetSum, numbers)` that takes in a targetSum
 and an array of numbers as arguments.

 The function should return an array containing the shortest combination
 of numbers that add up to exactly the targetSum.

 If there is a tie for the shortest combination, you may return any one of the shortest.
 */
function bestSum(targetSum, numbers) {
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;
    let shortest = null;
    for (let num of numbers) {
        const newTarget = targetSum - num;
        const result = bestSum(newTarget, numbers);
        if (result !== null) {
            const combination = [...result, num];
            if (shortest === null || combination.length < shortest.length) {
                shortest = combination;
            }
        }
    }
    return shortest;
}
function memoBestSum(targetSum, numbers, store = {}) {
    if (targetSum in store)
        return store[targetSum];
    if (targetSum < 0)
        return null;
    if (targetSum === 0)
        return [];
    let shortest = null;
    for (let num of numbers) {
        const newTarget = targetSum - num;
        const result = memoBestSum(newTarget, numbers, store);
        if (result != null) {
            const combination = [...result, num];
            if (shortest === null || combination.length < shortest.length) {
                shortest = combination;
            }
        }
    }
    store[targetSum] = shortest;
    return shortest;
}
console.log(memoBestSum(100, [2, 5, 25, 10]));
/**Tabulation Method
 *
 * m= targetSum, n= numbers.length
 * Complexity:
 * Time: m*n*m
 * Space: m^2
 */
const tabBestSum = (target, nums) => {
    var _a, _b;
    const table = Array(target + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= target; i++) {
        if (table[i] != null) {
            for (let item of nums) {
                if (table[i + item] < target) {
                    if (table[i + item] == null ||
                        ((_a = table[i + item]) === null || _a === void 0 ? void 0 : _a.length) < ((_b = table[i]) === null || _b === void 0 ? void 0 : _b.length)) {
                        table[i + item] = [...table[i], item];
                    }
                }
            }
        }
    }
    return table[target];
};
console.log(tabBestSum(7, [2, 3, 5]));
