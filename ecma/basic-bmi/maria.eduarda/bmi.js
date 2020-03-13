const weigth = 200;
const heigth = 1.5;
let result;
const bmi = weigth / heigth ** 2;

if (bmi < 18.5) {
    result = "Underweigth"
} else if (bmi <= 24.9) {
    result = "Normalweigth"
} else if (bmi <= 29.9) {
    RESULT = "Overweigth"
} else {
    result = "Obesity"
}
console.log ('BMI: ' , result);
