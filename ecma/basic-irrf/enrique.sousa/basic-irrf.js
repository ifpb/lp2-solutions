var salario = 3500;
var taxafinal;
if (salario <= 1903.98) {
  var taxafinal = 0;
} else if (salario < 2826.65) {
  var taxafinal = salario * 0.075 - 142.80;
} else if (salario < 3751.05) {
  var taxafinal = salario * 0.15 - 354.80;
} else if(salario < 4664.68){
  var taxafinal = salario * 0.225 - 636.13;
} else {
  var taxafinal = salario * 0.275 - 839.36;
}

console.log(taxafinal)