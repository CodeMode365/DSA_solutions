/**
 Write a function `howSum(targetSum, numbers)` that takes in a targetSum
 and an array of numbers as arguments.

 The function should return an array containing any combination of elements that 
 add up to exactly the targetSum. If there is no combintaion that adds up to the targetSum.
 If there is no combination that adds up to the targetSum, then return null.
 
 Complexity:
 Time: O( m ^ n * m)
 Space: O(m)

 m = target Sun
 n = numbers length
 */

function howSum(
  targetSum: number,
  numbers: Array<number>
): Array<number> | null {
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  for (let num of numbers) {
    let newTarget = targetSum - num;
    const result = howSum(newTarget, numbers);
    if (result !== null) {
      return [...result, num];
    }
  }
  return null;
}

/*

m = target sum
n = numbers.length

bruteforce:
time: O(n^m*m) ==>
space: O(m*m) ==> memo object stores m no. of data , and recursion occurs to m level


memoized
time: O(n*m^2) ==> m is increased due to data copying process for each m 
space: O(m^2)
*/

interface iMemo {
  [key: number]: Array<number> | null;
}

function memoHowSum(
  targetSum: number,
  numbers: Array<number>,
  store: iMemo = {}
): Array<number> | null {
  if (targetSum in store) return store[targetSum];
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  for (let num of numbers) {
    let newTarget = targetSum - num;
    const result = memoHowSum(newTarget, numbers, store);
    if (result !== null) {
      store[targetSum] = [...result, num];
      return store[targetSum];
    }
  }
  store[targetSum] = null;
  return null;
}

console.log(memoHowSum(97, [2, 6]));
