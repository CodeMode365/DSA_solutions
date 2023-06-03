/**
 * Write a function `allConstruct(target,wordBank)` that accepts a target string and an array of strings.
 *
 * The function should return a 2D array containing all of the ways that the `target` can be constructed by concatentating elements of the `wordBank` ways.
 * Each element of the 2D array should represent one combination that constructs the `target`.
 *
 */

/**
 * m = target.length
 * n = worBank.length
 *
 * Bruteforce Complexity
 * Time: O(n^m * m)
 * Space: O( m )
 *
 * Memoized Compleixty
 * Time: O(n^m)
 * Space: O( m * m)
 */

function allConstruct(
  target: string,
  wordBank: string[]
): string[][] | string[] {
  if (target == "") return [[]];

  const final: string[][] = [];

  for (let word of wordBank) {
    if (target.indexOf(word) == 0) {
      const result = allConstruct(target.slice(word.length), wordBank);
      const comb = result.map((res) => [word, ...res]);
      final.push(...comb);
    }
  }

  return final;
}

interface iMemory {
  [key: string]: string[][];
}

function memoAllConstruct(
  target: string,
  wordBank: string[],
  memory: iMemory = {}
): string[][] | string[] {
  if (target in memory) return memory[target];
  if (target == "") return [[]];
  const final: string[][] = [];

  for (let word of wordBank) {
    if (target.indexOf(word) == 0) {
      const result = memoAllConstruct(
        target.slice(word.length),
        wordBank,
        memory
      );
      const comb = result.map((res) => [word, ...res]);
      final.push(...comb);
    }
  }

  memory[target] = final;
  return final;
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  memoAllConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaaaaaa",
    "aaaaaaaaaa",
    "aaaaaaaaaaa",
  ])
);

/** Tabulation
 *
 *  n= target.length
 *  m= wordBank.length
 * Complxity
 * Time:n^m
 * Space:n^m
 */

function tabAllConstruct(
  target: string,
  worBank: string[]
): Array<string> | null {
  const table = Array(target.length + 1).fill([]);
  table[0] = [[]];

  for (let x = 0; x <= target.length; x++) {
    for (let item of table[x]) {
      for (let word of worBank) {
        if (target.slice(x, x + word.length) == word) {
          table[x + word.length] = [...table[x + word.length], [...item,word]];
        }
      }
    }
  }

  console.log(table);
  return table[target.length];
}

console.log("================");
console.log(tabAllConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  tabAllConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
