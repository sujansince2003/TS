interface person1 {
    name: string,
    age: number,
    sayHi(): void
}


class Person implements person1 {
    name: string
    age: number

    constructor(fname: string, age: number) {
        this.name = fname,
            this.age = age
    }
    sayHi = () => {
        console.log(this.name)
    }
}

const per = new Person("sujan", 22)

