const operador = "+";
const parcela1 = 1;
const parcela2 = 1;
var resultado;
if (operador == "+"){
    resultado = parcela1 + parcela2;
} else if (operador == "-"){
    resultado = parcela1 - parcela2;
} else if (operador == "*"){
    resultado = parcela1 * parcela2;
} else{
    resultado = parcela1 / parcela2;
};
console.log(resultado);