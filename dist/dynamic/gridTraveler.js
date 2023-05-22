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
/**
 *            ============== Tabulation ==============
 *
 *  Compleity
 * Time: O(mn)
 * Space: O(mn)
 */
function tabGridTraveler(row, col) {
    const table = Array(row + 1)
        .fill(null)
        .map(() => Array(col + 1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i <= row; i++) {
        for (let j = 0; j <= col; j++) {
            const current = table[i][j];
            // console.log(table[i + 1][j]);
            if (i + 1 <= row)
                table[i + 1][j] += current;
            if (j + 1 <= col)
                table[i][j + 1] += current;
        }
    }
    return table[row][col];
}
console.log(tabGridTraveler(2, 3));
