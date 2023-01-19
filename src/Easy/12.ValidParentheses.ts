/*
 ===============> Valid Parentheses <===============>
Companies
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/
function isValid(s: string): boolean {
    let previousParenth = []
    let currentParenth = ""
    let counter = 0
    while (counter <= s.length) {
        if (s[counter] == "{" || s[counter] == "[" || s[counter] == "(") {
            if (currentParenth == "") {
                currentParenth = s[counter]
            } else {
                previousParenth.push(currentParenth)
                currentParenth = s[counter]
            }
        }
        else if (s[counter] == "}" || s[counter] == "]" || s[counter] == ")") {
            if (currentParenth !== "") {
                previousParenth.push(currentParenth)
                currentParenth = ""
            }
            if (s[counter] == "}") {
                if (previousParenth[previousParenth.length - 1] == "{") previousParenth.pop()
                else return false
            }
            else if (s[counter] == "]") {
                if (previousParenth[previousParenth.length - 1] == "[") previousParenth.pop()
                else return false
            }
            else if (s[counter] == ")") {
                if (previousParenth[previousParenth.length - 1] == "(") previousParenth.pop()
                else return false
            }
        }
        counter += 1
    }
    if (previousParenth.toString() === [].toString() && currentParenth == "") {
        return true
    }
    return false
};
console.log(isValid("[]"))