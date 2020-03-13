var salario = 5000
var taxa = 0

if(salario <= 1903.98){
    taxa = 0
    console.log(taxa.toFixed(2));
}
else if (salario <= 2826.65){
    taxa = (salario* 0.075)-142.80;
    console.log(taxa.toFixed(2));
}
else if (salario <= 3751.05){
    taxa = (salario* 0.15)-354.80;
    console.log(taxa.toFixed(2));
}
else if (salario <= 4664.68){
    taxa = (salario* 0.225)-636.13;
    console.log(taxa.toFixed(2));
}
else if (salario > 4664.68){
    taxa = (salario* 0.275)-869.36;
    console.log(taxa.toFixed(2));
}
