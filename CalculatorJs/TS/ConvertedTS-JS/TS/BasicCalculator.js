"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicCalculator {
    add(a, b, ...args) {
        var sum = a + b;
        args.forEach(function (elem) {
            sum = sum + elem;
        });
        return sum;
    }
    substract(a, b, ...args) {
    }
    multiply(a, b, ...args) {
    }
    divide(a, b, ...args) {
    }
    factorial(a) {
    }
    pow(base, exp) {
    }
    sqrt(nr) {
    }
}
exports.BasicCalculator = BasicCalculator;
