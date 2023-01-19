"use strict";
/*
=======================> Add Binary <======================
Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/
function addBinary(a, b) {
    /** Initial values  */
    let m = a.split(""); //a into array of each value
    let n = b.split(""); // b into array of each value
    const extra = Math.abs(m.length - n.length); //find the difference between their length
    let carry = 0; //to store carry 
    let output = []; //to strore output array 
    /**Adding extra 0's to front if one of the number's length is less */
    for (let count = 1; count <= extra; count++) {
        if (m.length > n.length) {
            for (let W = 0; W < extra; W++) {
                n.unshift("0");
            }
        }
        else if (n.length > m.length) {
            for (let w = 0; w < extra; w++) {
                m.unshift("0");
            }
        }
        if (extra == 0)
            break;
    }
    // console.log(m.join(""))
    // console.log(n.join(""))
    for (let count = m.length - 1; count >= 0; count--) {
        const additionValue = Number(m[count]) + Number(n[count]) + carry; // add two numbers with carry
        switch (additionValue) {
            case 2:
                carry = 1;
                output.unshift("0");
                break;
            case 1:
                carry = 0;
                output.unshift("1");
                break;
            case 0:
                carry = 0;
                output.unshift("0");
                break;
            case 3:
                carry = 1;
                output.unshift("1");
                break;
            default:
                console.log('breaking..');
                break;
        }
    }
    if (carry == 1)
        output.unshift("1"); //check if there is still value left in carry at last
    return output.join("");
}
addBinary('111', '1010');
