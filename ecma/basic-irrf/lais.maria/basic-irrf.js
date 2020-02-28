let imp;
let salario = 3500.00;

if (salario <= 1903.98){
    imp = 0;
}
else if (salario < 2826.65){
    imp = (salario * 7.5)/100 - 142.80;
}
else if (salario < 3751.05){
    imp = (salario * 15.0)/100 - 354.80;
}
else if (salario < 4664.68){
    imp = (salario * 22.5)/100 - 636.13;
}
else{
    imp = (salario * 27.5)/100 - 869.36;
}
console.log(imp)