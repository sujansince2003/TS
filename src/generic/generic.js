//a normal js approach
function getFirstElement(arr) {
    return arr[0];
}
var el = getFirstElement(["sujan"]);
// console.log(el.toLowerCase());
// cannot use toLowercase :Property 'toLowerCase' does not exist on type 'string | number'.
//to solve this generics are used
function pair(a, b) {
    return [a, b];
}
var el1 = pair("sujan", 23);
console.log(el1);
//
function getFirstElement1(arr) {
    return arr[0];
}
var el2 = getFirstElement1(["sujan"]);
console.log(el2.toLowerCase());
