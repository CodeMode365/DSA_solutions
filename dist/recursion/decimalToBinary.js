"use strict";
const decimalToBinary = (input) => {
    if (input == 0)
        return input.toString();
    if (input == 1)
        return input.toString();
    return `${decimalToBinary(Math.floor(input / 2))}${input % 2}`;
};
console.log(decimalToBinary(233));
