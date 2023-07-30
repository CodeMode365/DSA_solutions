"use strict";
/**
 Find the maximum repeating character in a sentence:
 The result should return the first occuring character that has max repetation
 
 Example:
    Input: programming
    Output: r
 */
const maxRepeatation = (input) => {
    const inpArr = input.split('');
    const store = {};
    let maximum = null;
    for (let data of input) {
        if (data in store)
            store[data] += 1;
        else
            store[data] = 1;
    }
    // console.log(store)
    for (let data in store) {
        if (maximum == null || store[data] > store[maximum]) {
            maximum = data;
        }
    }
    return maximum;
};
console.log(maxRepeatation('programming')); // r
console.log(maxRepeatation('solar')); // s
console.log(maxRepeatation('swimming')); // i
