"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasicCalculator_1 = require("./BasicCalculator");
const ExpertCalculator_1 = require("./ExpertCalculator");
let calc = new BasicCalculator_1.BasicCalculator();
let expcalc = new ExpertCalculator_1.ExpertCalculator();
console.log(calc.add(2, 3));
console.log(expcalc.factorial(4));
console.log(expcalc.pow(4, 64));
console.log(expcalc.sqrt(16));
