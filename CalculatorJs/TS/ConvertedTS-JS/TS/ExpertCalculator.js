"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpertCalculator {
    factorial(a) {
        var rez = 1;
        for (var i = 1; i <= a; i++) {
            //console.log(rez);
            rez = rez * i;
        }
        return rez;
    }
    ;
    pow(base, exp) {
        var rez = base;
        for (var i = 1; i <= exp; i++) {
            rez = rez * base;
        }
        if (exp === 0) {
            rez = 1;
        }
        return rez;
    }
    sqrt(nr) {
        var root = 0.0;
        var square = root;
        while (square < nr) {
            root++;
            square = root * root;
        }
        return root;
    }
    add(a, b, ...n) {
    }
    divide(a, b, ...n) {
    }
    multiply(a, b, ...n) {
    }
    substract(a, b, ...n) {
    }
}
exports.ExpertCalculator = ExpertCalculator;
