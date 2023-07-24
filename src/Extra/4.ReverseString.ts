/*
 * Reverse a String: Write a function to reverse a given string without using any built-in reverse functions
 */

function reverseString(input: string): string {
    if (input.length <= 1) return input
    return input[input.length - 1] + reverseString(input.slice(0, input.length - 1))
}

console.log(reverseString("hello")) // olleh
console.log(reverseString("Hi I am a Boy"))//yoB a am I iH
console.log(reverseString("no body cares what you are doing"))//gniod era uoy tahw serac ydob on