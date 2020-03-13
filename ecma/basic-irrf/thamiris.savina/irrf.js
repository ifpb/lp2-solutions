const salario = 3500;

if (salario < 1903.99){
   taxa = 0;
} else if(salario < 2826.66){
    taxa =  salario * 0.075 - 142.8;
} else if(salario < 3751.06){
    taxa = salario * 0.15  - 354.8;
} else if( salario < 4664.69){
    taxa = salario * 0.225 - 636.13;
}else{
    taxa = salario * 0.275 - 869.36;
};

console.log("Taxa: " + taxa);