/**
 * Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.
 *
 * The function should return a boolean indicationg whether or not the `target` can be constructed by
 * concatenating elements of the `wordBank` array.
 *
 * You may reuse elements of `wordBank` as many time as needed.
 */

function canConstruct(target: string, wordBank: Array<string>): boolean {
  if (target == "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) == 0) {
      if (canConstruct(target.substring(word.length), wordBank) == true) {
        return true;
      }
    }
  }
  return false;
}

/*
Bruteforce Complexity

m = target.length
n = wordBank.length

Time: O(n ^ m * m) ==> m is added due to iteration over string using target.substring
Space: O(m)


Memoized Complexity

Time: O(n*m^2)
Space: O(m)

*/

interface iStore {
  [key: string]: boolean;
}

function memoCanConstruct(
  target: string,
  wordBank: Array<string>,
  store: iStore = {}
): boolean {
  if (target in store) return store[target];
  if (target == "") return true;

  for (let word in wordBank) {
    if (target.indexOf(word) == 0) {
      if (memoCanConstruct(target.substring(word.length), wordBank, store)) {
        store[target] = true;
        return true;
      }
    }
  }

  store[target] = false;
  return false;
}

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eeee",
    "eeeeeeeeeee",
    "eeeee",
  ])
);
console.log(
  memoCanConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eeee",
    "eeeeeeeeeee",
    "eeeee",
  ])
);

/**
 * Tabulation Problem
 *
 * M=target length
 * N=numbers length
 *
 * Complexity
 * time:(m*n*m)
 * space:m
 *
 */

function tabCanConstruct(target: string, wordBank: string[]): boolean {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let x = 0; x <= target.length; x++) {
    if (table[x]) {
      for (let word in wordBank) {
        //if the word matches the character starting at position i
        if (target.slice(x, x + word.length) == (word)) {
          const resulting = x + word.length;
          if (resulting < target.length) {
            table[resulting] = true;
          }
        }
        // target.slice(table[x], table[x] + word.length);
      }
    }
  }
  return table[target.length];
}

console.log("hello world");
console.log(tabCanConstruct("abcdef", ["ab", "cde", "def", "ef"]));
console.log("hello world");
