/*
Underweight	< 18,5
Normal weight	18,5–24,9
Overweight	25–29,9
Obesity	>= 30
Para calcular o IMC é necessário realizar a seguinte razão entre peso e altura:
BMI = weight/height²
Entrada	Saída
weight: 200
height: 1,5	Obesity
weight: 150
height: 2	Obesity
weight: 100
height: 2	Overweight
weight: 70
height: 2	Underweight
*/
let peso = 200;
let altura = 1.5;
bmi = peso / altura **2
if(bmi < 18.5){
    return "Underweight";
}
else if(bmi <= 24.9){
    return "Normal weight";
}
else if(bmi <= 29.9){
    return "Overweight"
}
else{
    return "Obesity"
}
