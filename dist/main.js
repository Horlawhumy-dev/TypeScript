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
