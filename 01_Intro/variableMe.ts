//string
let greetings:string= "Hello Samir";
console.log(greetings);
//greetings= 9 Error: Type '9' is not assignable to type 'string'.

// number
let age:number= 21.888;// number = int | float

//inferring the type
let myId= 123455 // typsscript will infer the type of myId as number
myId.toFixed()
// myId="amir" Error: Type '"amir"' is not assignable to type 'number'.

// boolean
let isLoggedIn:boolean= false


// dont use any
let hero;
 
function setHero(){
    return "Batman"; // can be number, string, boolean
}
hero= setHero();// similar as to js to typechecking avoid using any

let hero2: string;
function setHero2():string{
    return "Batman";
}
hero2= setHero2();// make it strict




export{}; // To avoid variable re-declaration error