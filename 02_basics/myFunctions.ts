function add (num:number) {
    //num.toUpperCase() error
    return num + 100;
}
add(100); // 200
// add("3")

function add2(num:number):number {// return type is given number
//    return "hello" return type is given number
    return num + 100;
}

function getUpper(val:string){// function is not inferred like variables so we need to specify the type
    return val.toUpperCase();
}
getUpper("hello"); // HELLO

function signup(email:string,password:string,ispaid:boolean){} // function with multiple parameters
signup("emial","samir",true);// error one at a time

// default parameters
function login(email:string,password:string,ispaid:boolean = true){} // function with default parameters
login("emial","samir");// no error


// arrow functions return type syntax
const add3 = (num:number):number => num + 100;// must return a number


const arr=[1,2,3,4,5];
arr.map((num):number=>{//typscript can infer the type of num
    return num * 2;
})


function consoleError(errorMsg:string):void{
    console.error(errorMsg);
}

function handleError(errorMsg:string):never{// never for error handling
    throw new Error(errorMsg);
}
export {}