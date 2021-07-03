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
console.log(object(user3));
console.log(user3);
