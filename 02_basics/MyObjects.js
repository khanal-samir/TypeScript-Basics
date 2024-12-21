"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Samir",
    email: "samir@gmail.com",
    password: 1234
};
function login(_a) {
    var string = _a.email, number = _a.password;
    return {};
}
function login2() {
    return { name: "samir", password: 1234 };
}
// login()// gives error statically
login(user);
login({ email: user.email, password: user.password });
console.log(login2());
function login3(user) {
    return user;
}
login3(user);
