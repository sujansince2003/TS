//a normal js approach
function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement(["sujan"]);
// console.log(el.toLowerCase());
// cannot use toLowercase :Property 'toLowerCase' does not exist on type 'string | number'.

//to solve this generics are used


function pair<T, U>(a: T, b: U): [T, U] {
    return [a, b]
}

const el1 = pair<string, number>("sujan", 23);
console.log(el1);


//
function getFirstElement1<T>(arr: T[]) {
    return arr[0];
}

const el2 = getFirstElement1<string>(["sujan"]);
console.log(el2.toLowerCase());