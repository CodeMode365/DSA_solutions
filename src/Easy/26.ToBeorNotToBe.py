'''
2704. To Be Or Not To Be

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 
Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.
'''

class ToBeOrNotToBe:
    def __init__(self,val) -> None:
        self.val=val

    def toBe(self,val2):
        if self.val == val2:
            return True
        raise ValueError("Not Equal")
    
    def notToBe(self, val3):
        if self.val != val3:
            return True
        raise ValueError("Equal")
    
    def expect(self, val):
        return {
            "toBe":self.toBe,
            "notToBe":self.notToBe,
        }
    

obj = ToBeOrNotToBe(5)
result = obj.expect(5)['toBe']("5")
print(result)