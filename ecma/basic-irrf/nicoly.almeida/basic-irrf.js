let imposto;
let salario = 3500;

if (salario <= 1903.98){
    imposto = 0;

} else if (salario < 2826.65){
    imposto = (salario * 7.5)/100	- 142.80;

} else if (salario < 3751.05) {
    imposto = (salario * 15.0)/100 - 354.80;

} else if (salario < 4664.68){
    imposto = (salario * 22.5)/100 - 636.13;

} else{
    imposto = (salario * 27.5)/100 - 869.36;
}	

console.log(imposto)