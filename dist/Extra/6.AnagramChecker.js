"use strict";
/**
 Anagram Checker:
 Write a function that checks if two strings are anagrams (contain the same characters with
 the same frequencies) of each other.
 */
function AnagramChecker(str1, str2) {
    let counter1 = {};
    let counter2 = {};
    let output = true;
    for (let st of str1.split('')) {
        if (st in counter1)
            counter1[st] += 1;
        else
            counter1[st] = 1;
    }
    for (let st of str2.split('')) {
        if (st in counter2)
            counter2[st] += 1;
        else
            counter2[st] = 1;
    }
    for (let val in counter1) {
        if (counter1[val] !== counter2[val]) {
            output = false;
            break;
        }
        else {
            continue;
        }
    }
    return output;
}
console.log("hello world");
console.log(AnagramChecker("sees", "esse")); // true
console.log(AnagramChecker("men", "nem")); // true
console.log(AnagramChecker("soman", "noman")); // false
console.log(AnagramChecker("pea", "sea")); //false
console.log(AnagramChecker("roster", 'restor')); //true
console.log(AnagramChecker("seahorse", 'horsesea')); //true
console.log(AnagramChecker("horsesInhouse", 'hoursesInseho')); //true
