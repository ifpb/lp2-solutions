let resultado = '';

for (let n = 0; n<100; n++){
    if (n < 10)
        resultado += '0'+n;
    else
        resultado += n;
    if ( n % 10 === 9)
        resultado += "\n";
    else
        resultado += " ";

}

console.log(resultado);