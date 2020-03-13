const weight = 100;
const height = 2;
const bmi = weight/height **2; 

let result;

if (bmi<18.5) {
    result = "Underweight"
}

else if (bmi<24.9) {
    result = "Normal Weight"
}

else if (bmi<29.9) {
    result = "Overweight"
}

else {
    result = "Obesity"
}

console.log(result)