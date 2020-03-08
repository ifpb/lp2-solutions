const n1 = 4;
const n2 = 2;
const op = "/";

let calc = require("./calc");

if (op == "+") {
    result = calc.soma(n1, n2);
}

else if (op == "-") {
    result = calc.sub(n1, n2);
}

else if (op == "*") {
    result = calc.mult(n1, n2);
}

else {
    result = calc.div(n1, n2);
}

console.log(result);