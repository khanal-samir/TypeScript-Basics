function add (num:number) {
    //num.toUpperCase() error
    return num + 100;
}
add(100); // 200
// add("3")

function getUpper(val:string){// function is not inferred like variables so we need to specify the type
    return val.toUpperCase();
}
getUpper("hello"); // HELLO

function signup(email:string,password:string,ispaid:boolean){} // function with multiple parameters
signup("emial","samir",true);// error one at a time
 