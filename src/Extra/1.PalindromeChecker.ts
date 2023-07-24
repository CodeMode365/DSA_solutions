/**
 * Palindrome Checker:
 * Write a function that checks if a given string is a palindrome (reads the same backward as forward). Ignore spaces, punctuation, and capitalization.
 */

function palindromeChecker(input: string): boolean {

    if (input.length <= 1) return true

    const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|\s}~]/g;

    //variables to store the position of the non punctuation character
    let a = 0 //from front
    let b = 0 //from back

    for (let x = 0; x < input.length; x++) {
        if (input[x].match(punctuationRegex)) {
            continue;
        }
        a = x
        break;
    }
    
    for (let x = input.length - 1; x >= 0; x--) {
        if (input[x].match(punctuationRegex)) {
            continue;
        }
        b = x
        break;
    }
    // console.log(input[a], input[b])
    if (input[a].toLocaleLowerCase() === input[b].toLowerCase())
        return palindromeChecker(input.slice(a + 1, b))
    return false
}

console.log(palindromeChecker("hello")) //false
console.log(palindromeChecker("HeLleh")) //true
console.log(palindromeChecker("Womow")) //true
console.log(palindromeChecker("meme")) //false
console.log(palindromeChecker("motion")) //false
console.log(palindromeChecker("sTUPid")) //false
console.log(palindromeChecker("peoPoep")) //true
console.log(palindromeChecker("Hello I am a programmer, remmargorpama I OLLeh")) //true