let peso = 200;
let altura = 1.5;
let bmi = peso/altura**2;
if(bmi < 18.5){
  console.log("Underweight");
}
else if(bmi <=24.9){
  console.log("Normal weight")

}
else if(bmi <=29.9){
  console.log("Overweight")
}
else{
  console.log("Obesity")
}