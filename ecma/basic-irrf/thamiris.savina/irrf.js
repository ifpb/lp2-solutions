const salario = prompt("Salario:");

if (salario < 1903.99){
   taxa = 0;
} else if(salario < 2826.66){
    taxa = 0.075 * salario - 142.8;
} else if(salario < 3751.06){
    taxa = 0.15 * salario - 354.8;
} else if( salario < 4664.69){
    taxa = 0.225 * salario - 636.13;
}else{
    taxa = 0.275 * salario - 869.36;
};

console.log("Taxa: " + taxa);