interface User{
    readonly _id:number
    name:string
    isLoggedIn:boolean| string
    isActive?:boolean
    loggedIn?:(a:string)=>string
    logOut?():string// both declaration works
}

const user1:User= {
    _id:123,
    name:"samir",
    isLoggedIn:"Yes",
    loggedIn:()=>{return "yes"}
}
const user2:User= {
    _id:123,
    name:"samir",
    isLoggedIn:false,
    isActive:false,
    loggedIn:(a="samir")=>a

}


// reopening of interface  for type use &
interface User{
    githubToken?:string
}

//inheritance
interface Admin extends User{
    role:string
}
const user3:Admin={
    role:"admin",
    _id:123,
    name:"samir",
    isLoggedIn:false,
    isActive:false,
    loggedIn:(a="samir")=>a,
    githubToken:"slfjsjfs"
}