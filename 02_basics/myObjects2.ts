type User={
   readonly _id:string,// canot change the value
    name:string,
    email:string,
    password:number,
    isActive?:boolean// optional
}

const user:User={
    _id:"123",
    name:"Samir",
    email:"samir", 
    password:1234
}

user.email="samir@gmail.com"
// user._id="1234"// error as _id is readonly


type CN= {
    cardNumber:number,
}
type CD= {
    cardDetails:string
}

// other users already defined types and we want to use them
type Card =CD & CN & {cvv:number}// intersection of types

const card1:Card= {
    cardNumber:1234,
    cardDetails:"visa",
    cvv:123
}
export{}