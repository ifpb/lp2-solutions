const weight = 200;
const height = 1.5;
const bmi = weight / height **2;
let result;
if (bmi < 18.5){
    result = "underweight"
}else if (bmi < 24.9){
    result = 'normal weight'
} else if (bmi < 29.9){
    result = 'overweight'
} else {
    result = 'obesity'
}
console.log(result)