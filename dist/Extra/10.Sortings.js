"use strict";
/**
 Sorting Algorithms:
 Implement sorting algorithms such as Bubble Sort, Selection Sort, or Merge Sort.
 */
function sorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            continue;
        }
        return false;
    }
    return true;
}
/* ========== Bubble Sorting ============== */
function bubbleSort(input) {
    for (let x = 0; x < input.length; x++) {
        if (!sorted(input)) {
            let currentInd = 0;
            for (let i = 0; i < input.length; i++) {
                if (input[currentInd] > input[currentInd + 1] && currentInd < input.length - 1) {
                    let a = input[currentInd];
                    input[currentInd] = input[currentInd + 1];
                    input[currentInd + 1] = a;
                }
                currentInd++;
            }
        }
    }
    return input;
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
console.log(bubbleSort([12, 64, 72, 51, 20, 12, 90]));
