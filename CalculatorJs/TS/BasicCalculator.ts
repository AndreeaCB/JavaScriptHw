import {Calculator} from "./Calculator";

export class BasicCalculator implements Calculator{
    add(a,b, ... args){
        var sum = a + b;
        args.forEach(function(elem){
            sum = sum + elem;
        });
        return sum;
    }
    substract(a,b, ... args){

    }
    multiply(a,b, ... args){

    }
    divide(a,b, ... args){

    }

    factorial(a) {
    }

    pow(base, exp) {
    }

    sqrt(nr) {
    }
}