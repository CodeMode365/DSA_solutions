/**
 * Say that you are a traveker on a 2D grid. You begin in the top-left corner
 * and your goal is to travel to the bottom-right corner.
 * You may only move down or right.
 *
 * In how many ways can you travel to the goal on a grid with dimension m * n
 *
 * Write a function `gridTraveler(m,n)` that calculates this.
 * 
 Time Complexicity: 2^(n + m)
 Space Complexicity: (m + n)
*/

function gridTraveler(row: number, col: number): number {
  if (row == 1 && col == 1) return 1;
  if (row == 0 || col == 0) return 0;
  return gridTraveler(row - 1, col) + gridTraveler(row, col - 1);
}

// console.log(gridTraveler(18, 18));
/*===================================== */
//Memoized Version

/**
 * Time Complexicity: m * n
 * Space Complexicity: m + n
 */
interface iMemo {
  [key: string]: number;
}
function memoGridTraveler(row: number, col: number, memo: iMemo = {}): number {
  const key = `${row},${col}`;
  if (key in memo) return memo[key];
  if (row == 1 && col == 1) return 1;
  if (row == 0 || col == 0) return 0;
  memo[key] =
    memoGridTraveler(row - 1, col, memo) + memoGridTraveler(row, col - 1, memo);
  return memo[key];
}

console.log(memoGridTraveler(18, 18));

/**
 *            ============== Tabulation ==============
 * 
 *  Compleity
 * Time: O(mn)
 * Space: O(mn)
 */
function tabGridTraveler(row: number, col: number): number {
  if (row == 0 || col == 0) return 0;

  let initial = {
    x: 1,
    y: 1,
  };

  let ways = 0;

  while (initial.x !== row && initial.y !== col) {

  }
}
