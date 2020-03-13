function ope (cal) {
    let num = Number(cal.split(",", 1));
    let num2 = Number(cal.slice(2,3));
    let op = cal.slice(4,5);
    let ope="";
    if(op=="+"){
        ope1 = num+num2
    }
    else if(op=="-"){
        ope1 = num-num2
    }
    else if(op=="*"){
        ope1 = num*num2
    }
    else{
        ope1 = num/num2
    };
    return ope1
}

module.export = ope
//refazer