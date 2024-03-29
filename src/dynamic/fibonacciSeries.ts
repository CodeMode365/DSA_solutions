/* Write a function 'f(n)' that takes in a number as an argument.
The function should return the n=th number of the Fibonacci Sequences

The 1st and 2nd number of the sequence is 1.
To generate the next number of the sequence, we sum the previous two.
*/

/**
 * 
 * 
Time Complexity:
The function dib recursively calls itself twice with the parameter n-1. Each recursive call reduces the value of n by 1 until it reaches the base case where n is less than or equal to 1. Therefore, the function will make 2 recursive calls at each level of the recursion until n reaches 1.

Considering the number of recursive calls made, the time complexity can be expressed as O(2^n), where n is the input parameter. This is an exponential time complexity, as the number of recursive calls doubles with each increase in n.

Space Complexity:
The space complexity of the function depends on the maximum depth of the recursive call stack. In this case, the function makes two recursive calls at each level until n reaches 1.

Since the function has a binary tree-like structure with two recursive calls at each level, the maximum depth of the call stack will be n. Therefore, the space complexity of the function is O(n).

To summarize:

Time Complexity: O(2^n)
Space Complexity: O(n)
 * 
 */

function Fibonacci(nth: number): number {
  if (nth <= 2) return 1;
  return Fibonacci(nth - 1) + Fibonacci(nth - 2);
}

// console.log(Fibonacci(50));

/**
 *THe below Memoized function has time complexicity of O(n) and Space complexicity of O(n)
 */

interface iMemos {
  [key: number]: number;
}

function memoFib(nth: number, memo: iMemos = {}): number {
  if (nth in memo) return memo[nth];
  if (nth <= 2) return 1;
  memo[nth] = memoFib(nth - 1, memo) + memoFib(nth - 2, memo);
  return memo[nth];
}
// console.log(memoFib(700));

//Tabulartion (Iterative Method)
/**
 * Complexity
 * Time: O(m)
 * Space:  O(m)
 */
function tabFib(nth: number):number {
  const table = Array(nth + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <=nth; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
return table[nth]
}

console.log(tabFib(500));
