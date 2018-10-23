"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator() {
    }
    BasicCalculator.prototype.add = function (a, b) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var sum = a + b;
        args.forEach(function (elem) {
            sum = sum + elem;
        });
        return sum;
    };
    BasicCalculator.prototype.substract = function (a, b) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
    };
    BasicCalculator.prototype.multiply = function (a, b) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
    };
    BasicCalculator.prototype.divide = function (a, b) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
    };
    return BasicCalculator;
}());
exports.BasicCalculator = BasicCalculator;
//# sourceMappingURL=BasicCalculator.js.map