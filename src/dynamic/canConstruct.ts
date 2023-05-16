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

console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eeee","eeeeeeeeeee","eeeee"]))
console.log(memoCanConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eeee","eeeeeeeeeee","eeeee"]))