let salario = 3000;
let tax;
if (salario <= 1903.98){
    tax = 0
  }
  else if(salario <= 2826.65){
    tax = (salario * 0.075) - 142.80;
  }
  else if(salario <= 3751.05){
    tax = (salario * 0.15) - 354.80;
  }
  else if(salario <= 4664.68 ){
    tax = (salario * 0.225) - 636.13;
  }
  else{
    tax = (salario * 0.275) - 869.36;
  }
  console.log(tax);