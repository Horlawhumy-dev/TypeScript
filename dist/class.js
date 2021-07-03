var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // custom type in tsc
// type str = string
// type num = number
// type bool = boolean
// class in typescript
var User = /** @class */ (function () {
    function User(firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
    }
    User.prototype.getFullName = function () {
        return "Fullname is " + this.firstName + ", " + this.middleName + " " + this.lastName;
    };
    User.prototype.changeFirstname = function () {
        this.firstName = this.lastName;
    };
    return User;
}());
// Inheritance in tsc
// class in typescript
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        Admin.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return Admin.editor;
    };
    return Admin;
}(User));
var user = new User('Arafat', 'Olayiwola', 'Olawumi');
var admin = new Admin("Foo", "Bar", "Doe");
console.log(user.getFullName());
console.log(user.changeFirstname());
console.log(user.getFullName());
console.log(admin.setEditor('White'));
console.log(admin.getEditor());
