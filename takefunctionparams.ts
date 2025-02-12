function takeFunction(func: () => number) {
    return func()
}


function sum(a: number, b: number): number {
    return a + b
}

console.log(takeFunction(() => sum(1, 2)))