import {BasicCalculator} from "./BasicCalculator";
import {ExpertCalculator} from "./ExpertCalculator";

let calc = new BasicCalculator();
let expcalc = new ExpertCalculator();

console.log(calc.add(2,3));
console.log(expcalc.factorial(4));
console.log(expcalc.pow(4,64));
console.log(expcalc.sqrt(16));

