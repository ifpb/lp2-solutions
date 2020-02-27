const salario = 3000;

if (salario <= 1903.98) {
    taxa = 0
    deducao = 0
}

else if (salario <= 2826.65) {
    taxa = 0.075
    deducao = 142.8
}

else if (salario <= 3751.05) {
    taxa = 0.15
    deducao = 354.8
}

else if (salario <= 4664.68) {
    taxa = 0.225
    deducao = 636.13
}

else {
    taxa = 0.275
    deducao = 869.36
}

imposto = (salario * taxa) - deducao

console.log(imposto.toFixed(2))