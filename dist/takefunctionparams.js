"use strict";
function takeFunction(func) {
    return func();
}
function sum(a, b) {
    return a + b;
}
console.log(takeFunction(() => sum(1, 2)));
