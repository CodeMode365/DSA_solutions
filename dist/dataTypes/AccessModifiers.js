"use strict";
/*
===> Static <==
stic dataTypes can be access without refrencing the creating of a class
if static member's value changes then all the instances refrencing it will change
Allows for class-level operations and data that are not tied to individual instances.
Enables utility methods or properties that can be used without creating instances of the class.
Helps in maintaining shared state or behavior across instances.
 */
class TestApp {
    static Add(a, b) {
        this.result += a + b;
        console.log(this.result);
    }
    increment() {
        TestApp.result++;
    }
}
TestApp.out = 32;
//   public result = 0;
TestApp.result = 0;
function add(a, b) {
    let res = 0;
    console.log(res);
    res++;
}
var Master;
(function (Master) {
    const x = 2;
    const y = 3;
    function main() {
        console.log(x, y);
    }
    Master.main = main;
})(Master || (Master = {}));
TestApp.Add(2, 3);
TestApp.Add(2, 3);
const tester = new TestApp();
const tester2 = new TestApp();
tester.increment();
tester2.increment();
console.log(TestApp.result);
console.log("Module level: ", Master.main());
