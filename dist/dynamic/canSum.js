"use strict";
/**
  Write a function `canSum(targetSum, numbers)`
  that takes in a targetSum and an array of numbers as arguments.

  The function should return a boolean indicating whether or not it is possible
  to generate the targetSum using numbers from the array.
  
  You may use an element of the array as many times as needed.

  You may assume that all input numbers are non-negative.
 */
function canSum(targetSum, numbers) {
    numbers.map((ele) => {
        if (ele <= targetSum) {
            if (targetSum - ele == 0) {
                console.warn("!!!!!!!Trueeeee");
                return true;
            }
            let newTarget = targetSum - ele;
            console.log("ELement:" + ele);
            console.log("Target" + newTarget);
            return canSum(newTarget, numbers);
        }
    });
    return false;
}
console.log(canSum(7, [2, 3]));
