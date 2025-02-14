type User =
    {
        fname: string,
        age: number
    }

type usersType =
    {
        [key: string]: User
    }

const users: usersType = {
    123: { fname: "sujan", age: 20 }
    //wont give error even we have said key should be string because javaScript always stores object keys as strings, even if they are written as numbers.
}

//this is abit ugly implementation
//so we can use Record

type UserRecord = Record<string, User>

const users2: UserRecord = {
    "sujan": { fname: "sujan", age: 23 }
}
