
let salario = 2000;
let tax;
if(salario <= 1903.98){
  tax = 0;
  console.log(tax);
}
else if(salario <= 2826.65){
  tax = (salario *  0.075) - 142.80;
  console.log(tax);
}
else if(salario <=3751.05){
  tax = (salario *0.15) - 354.80;
  console.log(tax); 
}
else if(salario <= 4664.68){
  tax = (salario * 0.225) - 636.13;
  console.log(tax);
}
else{
  tax = (salario * 0.275) - 869.36
  console.log(tax);
}