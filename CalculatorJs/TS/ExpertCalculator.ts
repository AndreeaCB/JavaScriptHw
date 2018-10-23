import {Calculator} from "./Calculator";

export class ExpertCalculator implements Calculator{

    factorial(a){
        let rez =1;
        for(let i= 1; i <= a; i++){
            console.log(rez);
            rez = rez * i;
        }
        return rez;
    };


    pow(base, exp){

        let rez = base;
        for(let i= 1; i <= exp; i++) {
            rez = rez * base;
        }
        if (exp === 0) {
            rez = 1;
        }
        return rez;
    }
    sqrt(nr){

        let root = 0.0
        let square = root;
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