let salario = 5000;

let taxa;

if(salario <= 1903.98){
  tax = 0;
  console.log(taxa);
}

else if(salario <= 2826.65){
  taxa = (salario *  0.075) - 142.80;
  console.log(taxa);
}

else if(salario <=3751.05){
  taxa = (salario *0.15) - 354.80;
  console.log(taxa); 
}

else if(salario <= 4664.68){
  tax = (salario * 0.225) - 636.13;
  console.log(taxa);
}

else{
  taxa = (salario * 0.275) - 869.36
  console.log(tax);
}