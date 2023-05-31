/**
  Write a function `canSum(targetSum, numbers)` 
  that takes in a targetSum and an array of numbers as arguments.

  The function should return a boolean indicating whether or not it is possible 
  to generate the targetSum using numbers from the array.
  
  You may use an element of the array as many times as needed.

  You may assume that all input numbers are non-negative.

Time complexity: O(m^n) ==> (m = target & n = array)
Space complexity:
  */

function canSum(targetSum: number, numbers: Array<number>): boolean {
  if (targetSum == 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }

  return false;
}

/*
Complexity of memoized code

Time: O(m*n)
Space: O(m)

*/

interface iMemoStore {
  [key: number]: boolean;
}

function memoCanSum(
  targetSum: number,
  numbers: Array<number>,
  memo: iMemoStore = {}
): boolean {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (memoCanSum(remainder, numbers, memo) == true) {
      memo[targetSum] = true;
      return memo[targetSum];
    }
  }
  memo[targetSum] = false;
  return false;
}

console.log(memoCanSum(230, [3, 3, 3]));

/*
Tabulation Method Complexity

Time: mn
spac: m
*/
function tabCanSum(target: number, values: Array<number>): boolean {
  const table = Array(target + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target; i++) {
    if (table[i] === true) {
      for (let element of values) {
        table[i + element] = true;
      }
    }
  }
  return table[target];
}

console.log(tabCanSum(7, [5, 4, 3]));
