let weight = 60;
let height = 1.65;
let result;
let imc = weight / height ** 2;

if (imc < 18.5) {
  result = 'Underweight';
} else if (imc >= 18.5 && imc <= 24.9) {
  result = 'Normal weight';
} else if (imc >= 25 && imc <= 29.9) {
  result = 'Overweight';
} else {
  result = 'Obesity';
}

console.log('IMC: ' + imc + '\nResult: ' + result);