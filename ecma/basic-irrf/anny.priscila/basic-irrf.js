let tax;

let salario = 5000;

if (salario < 1903.99){
    tax = 0;
} else if (salario < 2826.66) {
    tax = 0.075 * salario - 142.8;
} else if (salario < 3751.06) {
    tax = 0.15 * salario - 354.8;
} else if (salario < 4664.69) {
    tax = 0.225 * salario - 636.13;
} else {
    tax = 0.275 * salario - 839.36;
}

console.log(tax);
