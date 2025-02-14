type uniontype = number | string

const user2: uniontype = 1
const user3: uniontype = "sujan"

//we cannot do this with interface





type gooduser =
    {
        name: string,
        gift: string
    }

type baduser =
    {
        name: string,
        ip: string
    }


type usertype = gooduser | baduser

const user5 =
{
    name: "sujan",
    gift: "laptop",
    ip: "127.0.0.1"
}