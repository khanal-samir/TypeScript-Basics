"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//string
var greetings = "Hello Samir";
console.log(greetings);
//greetings= 9 Error: Type '9' is not assignable to type 'string'.
// number
var age = 21.888; // number = int | float
//inferring the type
var myId = 123455; // typsscript will infer the type of myId as number
myId.toFixed();
// myId="amir" Error: Type '"amir"' is not assignable to type 'number'.
// boolean
var isLoggedIn = false;
// dont use any
var hero;
function setHero() {
    return "Batman"; // can be number, string, boolean
}
hero = setHero(); // similar as to js to typechecking avoid using any
var hero2;
function setHero2() {
    return "Batman";
}
hero2 = setHero2(); // make it strict
