"use strict";
/**
 * Find Duplicates:
 *  Write a function that takes an array of integers and returns an array containing any duplicate elements.
 */
function findDuplicates(input, memo = {}) {
    const counter = {};
    let output = [];
    for (let val of input) {
        if (val in counter) {
            counter[`${val}`] += 1;
        }
        else {
            counter[`${val}`] = 1;
        }
    }
    for (let val in counter) {
        if (counter[val] >= 2)
            output.push(Number(val));
    }
    return output;
}
console.log(findDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 3, 2])); // [1, 2, 3, 4]
console.log(findDuplicates([12, 42, 1, 48, 12, 23, 44, 46, 48, 48])); // [12, 48]
console.log(findDuplicates([5, 6, 7, 12, 13, 14, 12, 13, 6, 12])); // [6, 12, 13]
