/**
 10. Regular Expression Matching
Hard
Companies
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example 1:
  
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
 */

function isMatch(s: string, p: string): boolean {

    let s1: string[] = s.split("")
    let p1: string[] = p.split("")
    //base cases
    if (p == s) {
        console.log("c-1")
        return true
    }
    if (p1.length == 0 || s1.length == 0) {
        console.log("c0")
        return false
    }
    if (s1[0] == p1[0]) {
        console.log("c1")
        if (p1[1] == "*") {
            const newTest = []
            for (let x of s1.slice(0)) {
                if (s1[0] == x) continue
                newTest.push(x)
            }
            console.log(newTest)
            return (isMatch(newTest.join(""), p1.slice(1).join("")))
        }
        return isMatch(s1.slice(1).join(""), p1.slice(1).join(""))
    }
    if (p == "*" && s.length == 1) {
        console.log("c2")
        return true
    }
    //test cases
    if (p1[0] == "*") {
        if (s1[1] == p1[1] || p1[1] == ".") {
            console.log("c3")
            return isMatch(s1.slice(1).join(""), p1.slice(1).join(""))
        }
        console.log("c4")
        return isMatch(s1.slice(1).join(""), p1.join(""))
    }
    if (p1[0] == ".") {
        console.log("c5")
        return isMatch(s1.slice(1).join(""), p1.slice(1).join(""))
    }

    if (p1[0] !== s1[0] && p1[1] == "*") {
        if (p1[1] == "*") {
            console.log("c7")
            return isMatch(s1.join(""), p1.slice(2).join(""))
        }
    }
    console.log("c6")
    return false
};

console.log(isMatch("aa", "a"))//false
console.log(isMatch("aa", ".a"))//true
console.log(isMatch("aa", "a*"))//true
console.log(isMatch("abcda", "*a"))//true
console.log(isMatch("aab", "c*a*b"))//true
console.log(isMatch("mississippi", "mis*is*ip*."))//true
console.log(isMatch("mississippi", "mis*is*p*."))//false