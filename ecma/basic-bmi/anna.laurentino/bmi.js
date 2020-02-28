const weight = 200;
const height = 1.5;
const bmi = weight / height **2;
if (bmi > 18.5){
    console.log("Underweight");
} else if(bmi >= 24.9 ){
    console.log("Normal weight");
} else if(bmi >= 29.9 ){
    console.log("Overweight");
}else{
    console.log("Obesity")
};

console.log (`BMI: ${result}`)