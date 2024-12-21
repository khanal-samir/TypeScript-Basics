"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    //num.toUpperCase() error
    return num + 100;
}
add(100); // 200
// add("3")
function add2(num) {
    //    return "hello" return type is given number
    return num + 100;
}
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hello"); // HELLO
function signup(email, password, ispaid) { } // function with multiple parameters
signup("emial", "samir", true); // error one at a time
// default parameters
function login(email, password, ispaid) {
    if (ispaid === void 0) { ispaid = true; }
} // function with default parameters
login("emial", "samir"); // no error
// arrow functions return type syntax
var add3 = function (num) { return num + 100; }; // must return a number
var arr = [1, 2, 3, 4, 5];
arr.map(function (num) {
    return num * 2;
});
function consoleError(errorMsg) {
    console.error(errorMsg);
}
function handleError(errorMsg) {
    throw new Error(errorMsg);
}
