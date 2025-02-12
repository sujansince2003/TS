"use strict";
//greet
//assinging type to parameter
function sayHello(fname) {
    console.log("hello" + fname);
}
sayHello("sujan");
//assigning type to return type
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
//giving type to return of function
function age(age) {
    if (age > 18)
        return true;
    else
        return false;
}
console.log(age(43));
function sayhi() {
    console.log("hii");
}
