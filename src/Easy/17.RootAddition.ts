/**
 Write a program to find the sum of perfect squre numbers between a and b,
 including both a and b as well if they are perfect squre.

 The perfect numbers between a=2 and b=10 are 4,9 and the sum is 13
 The perfect sqare numbers between a=4 and b=25 are 4,9,16,25 and the sum is 54.
 Find the sum of such numbers keepin in mind that a, 5 are in range [1,1000], and &gt a
 */

function squreSum(a: number, b: number) {

    const perfectRoots: number[] = []

    for (let i = a; i <= b; i++) {

        //method 1
        const check1 = String(Math.sqrt(i))
        const check2 = String(String(Math.floor(Math.sqrt(i))))

        if (check1 === check2) perfectRoots.push(i)
    }

    const sum = perfectRoots.reduce((acc, item) => {
        return acc += item
    }, 0)

    return sum
}



console.log(squreSum(4, 25)) //54
console.log(squreSum(4, 10)) //54