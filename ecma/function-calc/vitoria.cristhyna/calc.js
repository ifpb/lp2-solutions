let cal = "9,2,*";
let num = Number(cal.split(",", 1));
let num2 = Number(cal.slice(2,3));
let op = cal.slice(4,5);
let ope="";
if(op=="+"){
    ope = num+num2
}
else if(op=="-"){
    ope = num-num2
}
else if(op=="*"){
    ope = num*num2
}
else{
    ope = num/num2
}
console.log(ope)