interface person {
    name: string,
    age: number,
    salary?: number,  //making it optional
    subjects:
    {
        course: string,
        clg: string
    },
    sayHello(greeting: string): string,
    normalFun: () => string
}

const sujan: person =
{
    name: "sujan",
    age: 22,
    //here since salary is optinal we can skip the salary key and value
    subjects: {
        course: "csit",
        clg: "bmc"
    },
    sayHello: function (greeting) {
        return "hello" + greeting
    },
    normalFun: () => {
        return "helo"
    }
}