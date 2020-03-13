const peso= 200
const altura= 1.5
const imc = peso / altura **2
let resultado
if (imc >= 18.5){
    resultado = 'Underweight';

}
else if (imc >=24,9) {
    resultado = 'Normal weight';
}
else if (imc <=29,9) {
    resultado = 'Overweight';
}
else if (imc >= 30) {
    resultado = 'Obesity';
}
console.log(resultado)

