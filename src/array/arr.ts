interface userarr {
    fname: string,
    lname: string,
    age: number
}

const users: userarr[] = [{
    fname: "ram",
    lname: "kumar",
    age: 23
},
{
    fname: "shyam",
    lname: "singh",
    age: 21
},]


users.map(user => {
    console.log(user.fname)
}
)