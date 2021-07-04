// union operator in tsc
var anything;
// function in typescript
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(3, 5));
var user1 = {
    name: "Arafat",
    age: 24,
    getMessage: function () {
        return "my name is " + user1.name + " and I am " + user1.age + " years";
    },
    isShort: false
};
console.log(user1.getMessage());
var user2 = {
    name: "Olayiwola",
    age: 45,
    getMessage: function () {
        return user2.name + " " + user2.age;
    }
};
console.log(user2);
console.log(user2.getMessage());
// four tsc data assertions are any, never, unknown, void
var vAny = null;
var vUnknown = null;
var pageNumber = "3";
var prevPageNumber = pageNumber;
// void data assertion cannot read return of a function
function isTrue(yes) {
    console.log(yes ? "true" : "false");
}
isTrue(true);
function printName(obj) {
    var _a;
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: "Arafat", last: "Olayiwola" });
// union type in tsc
var namee = prompt("Enter your name: ");
function getNameLength(n) {
    return n.length;
}
// console.log(getNameLength(namee))
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function f(obj) {
    return obj.X;
}
// Works, since 'E' has a property named 'X' which is a number.
//   console.log(f(E));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    var num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}
// this log nothing since num > LogLevel.WARN which is 0
//   printImportant("INFO", "This is a message");
