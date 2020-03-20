function calculadora (a,b,c){
    switch(c){
        case "+":
            return parseInt(a) + parseInt(b);
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
}

module.exports = calculadora;