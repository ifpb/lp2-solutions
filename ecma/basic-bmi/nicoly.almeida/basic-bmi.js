const weight = 200;
const height = 1.5;
let result;
const bmi = weight/ height**2

if ( bmi  < 18.5) {
    result = 'Underweight'
} else if ( bmi < 24.9) {
    result = 'Normal weight'	
} else if (  bmi < 29.9) {
    result = 'Overweight'
} else {
    result = 'Obesity'
}

console.log(result)