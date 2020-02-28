const salario = 2000;

if (salario <= 1903.98) {
    ali = 0
    parc = 0
}

else if (salario<2826.65) {
    ali = 7.5
    parc = 142.80
}

else if ( salario<3751.05){
    ali = 15.0
    parc = 354.80
}
else if ( salario<4664.68){
    ali = 22.5
    parc = 636.13
}
else {
    ali= 27.5
    parc = 869.36
}

imposto = (salario * ali/100) - parc

console.log(imposto.toFixed(2))