"use strict";
//fibonicci Series into nth tern
function fib(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    console.log(n);
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(10));
