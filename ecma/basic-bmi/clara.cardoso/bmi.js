const weigth = 200;
const heigth = 1.5;
const bmi = weigth /heigth ** 2;
let result;

if (bmi <= 18.5) {
    result = "Underweigth"
} else if (bmi <= 24.9) {
    result = "Normal weigth"
} else if (bmi <= 29.9) {
    result = "Overweigth"
} else {
    result = "Obesity"
}

console.log('BMI: ' , result);