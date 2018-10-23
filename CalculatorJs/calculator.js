//constructor
Calculator = function(){
    this.add = function(a,b){
        return a+b;
    }
    this.substract = function (a,b){
        return a-b;
    }
    this.multiply = function(a,b){
        return a*b;
    }
    this.divide = function(a,b){
        return a/b;
    }
}
module.exports =  Calculator;