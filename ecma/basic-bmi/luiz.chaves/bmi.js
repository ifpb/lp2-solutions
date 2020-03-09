const weight = 150;
const height = 2;
const bmi = weight / height ** 2;
let result = "";

if (bmi < 18.5) {
  result = "Underweight";
} else if (bmi < 25) {
  result = "Normal weight";
} else if (bmi < 30) {
  result = "Overweight";
} else {
  result = "Obesity";
}

// Obesity
console.log(result);