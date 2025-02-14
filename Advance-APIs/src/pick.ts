interface user {
    fname: string
    email: string,
    password: string,
    age: number,
    id: number
}

//lets say we want to get only fname,email and age as arguments to update userdata then we may make another interface to use like:
interface toupdateType {
    fname: string,
    email: string,
    age: number,

}
//and use this in function

// function updateUser(userData: toupdateType) {
///do something
// }

//works fine but problem is if we change the main user interface like age to string type then we also have to change age type in toupdateType so this is not the best way to do it. there come pick at rescue

type pickUsertype = Pick<user, 'fname' | 'email' | 'age'>

function updateUser1(userData: pickUsertype) {
    console.log(userData)
}

updateUser1({ fname: "suajn", email: "suajn", age: 24 })

//this will works perfectly fine