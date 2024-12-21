const user= {
    name:"Samir",
    email:"samir@gmail.com",
    password:1234
}

function login ({email:string,password:number}):object{// can return object 
    return {}
}
function login2():{name:string,password:number}{// return type is given nam and pass
    return {name:"samir",password:1234}
}

// login()// gives error statically
login(user)
login({email:user.email,password:user.password})
console.log(login2());


// type alias
type MyString = string; // type alias
type User = {name:string,password:number}
function login3(user:User):User{// object should follow User type and also return type is User
    return user;
}
login3(user)
// login3({name:"samir",password:1234,isActive:true})// error as isActive is not in User type

export{}