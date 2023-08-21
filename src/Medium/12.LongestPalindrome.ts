function longestPalidrome(s: string): string {
    let longestPal = "";
    for (let right = s.length - 1; right >= 0; right--) {
        for (let left = 0; left <= right; left++) {
            const substring = s.slice(left, right + 1);
            if (substring.length > longestPal.length) {
                if (isPalindrome(substring)) {
                    longestPal = substring;
                }
            } else {
                break;
            }
        }
    }

    return longestPal;
}

function isPalindrome(s: string): boolean {
    let isPal = true;
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            isPal = false;
            break;
        }
    }
    return isPal;
}

function isPalindrome(input: string): boolean {
    // console.log("calling me", input, input.length <= 1)
    if (input.length <= 1) return true
    if (input[0] == input[input.length - 1]) {
        return isPalindrome(input.slice(1, input.length - 1))
    }
    return false
}

console.log(longestPalidrome("babad"))
console.log(longestPalidrome(""))
console.log(longestPalidrome("x")) //x
console.log(longestPalidrome("madaskaraksad"))
console.log(longestPalidrome("cbbd"))
console.log(longestPalidrome("racecar")) //racecar
console.log(longestPalidrome("aaaaaa")) //aaaaaa
console.log(longestPalidrome("abcdefg")) //


// console.log("x".slice(0, 1))

