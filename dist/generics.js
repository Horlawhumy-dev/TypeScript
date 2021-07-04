// generics interface in tsc
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var object = function (obj) {
    var id = Math.floor(Math.random() * 10000).toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user3 = {
    name: "Arafat",
    data: {
        meta: [1, 2, 3, 4]
    },
    prop: ['foo', 2, true]
};
// console.log(object(user3))
// console.log(user3)
function firstElement(arr) {
    return arr[0];
}
var s = firstElement([true, 2, 'c']);
// console.log(typeof s)
function firstElement2(arr2) {
    return arr2[0];
}
// firstElement2 ahs type of Type
// But having instatiated, it has type of string | number like below
var a = firstElement2([1, 'a']);
// console.log(typeof a)
function filter1(arr, func) {
    return arr.filter(func);
}
// console.log(filter1([1, 2, 3, 4, 'a'], (n) => n > 2));
function myForEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        // I don't feel like providing the index today
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3, 5], function (a, i) { return console.log(a, i); });
