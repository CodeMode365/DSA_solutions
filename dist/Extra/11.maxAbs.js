"use strict";
/**
 Find the max absolute value from all the two difference of two array taken from the input array.

 Example: Input Array [-1,2, 4, 7 ]
 
 Output: 8
 Explanation:
    difference of two arrays are :
     [-1, 2]= abs((-1)-2)=3
     [-1, 4]= abs((-1)-4)=5
     [-1, 7]=abs((-1)-7)=8
     [2, 4]= abs(2-4)=2
     [2, 7]= abs(2-7)=3
     [4, 7] = abs(4-7) =3
     ==> The max difference of all is 8
 */
const maxAbs = (input) => {
    let store = {};
    let max = 0;
    for (let item1 of input) {
        for (let item2 of input) {
            if (String([item1, item2]) in store || String([item2, item1]) in store) {
                continue;
            }
            else if (String(item1) !== String(item2)) {
                const current = String([item1, item2]);
                store[current] = Math.abs(item1 - item2);
            }
        }
    }
    for (let data in store) {
        if (store[data] > max)
            max = store[data];
    }
    return max;
};
console.log(maxAbs([-1, 2, 4, 7]));
