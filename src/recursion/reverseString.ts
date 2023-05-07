/* Important things to note while using recursion
 1) What is the base case? what is the smallest unit that i can pass to the function ?
 2) What is the smallest amount of work that i can perfrom in each iteration ?
*/
function revString(input: string): string {
  //return the single character if the string length is one
  if (input.length == 1) return input[0];
  //return the last string , and recursive call itself with the string(excluding the last character)
  return input[input.length - 1] + revString(input.slice(0, input.length - 1));
}

console.log(revString("hello"));
