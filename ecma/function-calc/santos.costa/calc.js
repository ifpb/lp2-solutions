/*  ***Dicionário da questão*** 
opr1: primeiro algarismo;
opr2: segundo algarismo;
opt: algarismo a ser feita a operação;

*/


function calc(opr1, opr2, opt){
    if(opt == "+"){
        let soma = opr1+opr2;
        console.log(soma);
    }else if(opt == "-"){
        let sub = opr1 - opr2;
        console.log(sub);
    }else if(opt == "*"){
        let multi = opr1 * opr2;
        console.log(multi);

    }else if (opt == "/"){
        let div = opr1 / opr2;
        console.log(div);
    }
}

calc(1,1,"/");