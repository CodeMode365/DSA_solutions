/**
 Write a function `bestSum(targetSum, numbers)` that takes in a targetSum
 and an array of numbers as arguments.

 The function should return an array containing the shortest combination
 of numbers that add up to exactly the targetSum.

 If there is a tie for the shortest combination, you may return any one of the shortest.
 */

function bestSum(targetSum: number, numbers: number[]): number[] | null {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortest: number[] | null = null;

  for (let num of numbers) {
    const newTarget = targetSum - num;
    const result: null | number[] = bestSum(newTarget, numbers);

    if (result !== null) {
      const combination = [...result, num];

      if (shortest === null || combination.length < shortest.length) {
        shortest = combination;
      }
    }
  }

  return shortest;
}

/*
Brute Force

m = target sum
n = numbers.length

Brute Force
time: O(n^m *m)
space: O(m*m) ==> Level * Shortest length store


Memoized
time: O(m^2*n) ==> additional m comes from copying the array (spreading array with new number)
space: O(m^2)

*/

interface iMem {
  [key: number]: Array<number> | null;
}

function memoBestSum(
  targetSum: number,
  numbers: Array<number>,
  store: iMem = {}
): Array<number> | null {
  if (targetSum in store) return store[targetSum];
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  let shortest: Array<number> | null = null;

  for (let num of numbers) {
    const newTarget: number = targetSum - num;
    const result: null | Array<number> = memoBestSum(newTarget, numbers, store);

    if (result != null) {
      const combination = [...result, num];

      if (shortest === null || combination.length < shortest.length) {
        shortest = combination;
      }
    }
  }

  store[targetSum] = shortest;
  return shortest;
}

console.log(memoBestSum(100, [2, 5, 25, 10]));

/**Tabulation Method
 *
 * m= targetSum, n= numbers.length
 * Complexity:
 * Time: m*n*m
 * Space: m^2
 */

const tabBestSum = (
  target: number,
  nums: Array<number>
): null | Array<number> => {
  const table: (null | Array<number>)[] = Array(target + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= target; i++) {
    if (table[i] != null) {
      for (let item of nums) {
        if (table[i + item] < target) {
          if (
            table[i + item] == null ||
            table[i + item]?.length < table[i]?.length
          ) {
            table[i + item] = [...table[i], item];
          }
        }
      }
    }
  }
  return table[target];
};

console.log(tabBestSum(7, [2, 3, 5]));
