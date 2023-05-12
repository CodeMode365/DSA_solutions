"use strict";
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
function gridTraveler(row, col) {
    if (row == 1 && col == 1)
        return 1;
    if (row == 0 || col == 0)
        return 0;
    return gridTraveler(row - 1, col) + gridTraveler(row, col - 1);
}
function memoGridTraveler(row, col, memo = {}) {
    const key = `${row},${col}`;
    if (key in memo)
        return memo[key];
    if (row == 1 && col == 1)
        return 1;
    if (row == 0 || col == 0)
        return 0;
    memo[key] =
        memoGridTraveler(row - 1, col, memo) + memoGridTraveler(row, col - 1, memo);
    return memo[key];
}
console.log(memoGridTraveler(18, 18));
