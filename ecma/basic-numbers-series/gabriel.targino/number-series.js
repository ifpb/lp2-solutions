//let result = '';

//for (let num = 0; num <= 99; num ++){
    //if (num < 10)
        //result += "0" + num;
    //else 
        //result += num
    //if (num % 10 === 9)
        //result += "\n";
    //else
        //result += " ";
//}

//console.log(result);

for (let i = 0; i<10; i++) {
    linha = "";
    linha += i+"0";
    for (let j = 1; j<10; j++){
        linha += " "+i+j;
    }
    console.log(linha);
}

console.log()

for (let i = 9; i>-1; i--) {
    linha = "";
    linha += i+"9";
    for (let j = 8; j>-1; j--){
        linha += " "+i+j;
    }
    console.log(linha);
}

console.log();

for (let i = 9; i>-1; i--) {
    linha = "";
    linha += i+"9";
    for (let j = 7; j>-1; j-=2){
        linha += " "+i+j;
    }
    console.log(linha);
}
