"use strict";
function sumNaturalNumbers(input) {
    if (input <= 1)
        return input;
    return input + sumNaturalNumbers(input - 1);
}
console.log(sumNaturalNumbers(10));
