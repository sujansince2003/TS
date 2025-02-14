interface user {
    fname: string,
    email: string,
    password: string,
    age: number,
    id: number
}




type pickUsertype1 = Pick<user, 'fname' | 'email' | 'age'>

/*Partial makes all properties of a type optional, creating a type with the 
same properties, but each marked as optional.
lets say to update user ,user may not give all three values 
he may give either of these 3 but currently the pickUsertype is not optional so
it will throw error. to solve this we can use partials */

type partialType = Partial<pickUsertype1>;
/*
now its make like this

type partialType = {
    fname?: string | undefined;
    email?: string | undefined;
    age?: number | undefined;
}

//now use this in function
*/

function updateUser(userData: partialType) {
    console.log(userData)
}

updateUser({ fname: "suajn", email: "suajn", age: 24 })

//this will works perfectly fine