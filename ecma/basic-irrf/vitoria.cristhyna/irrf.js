var sal = 5000.00;
var tax;
if (sal <= 1903.98){
    tax= 0;
}
else if(sal <= 2826.65){
    tax = sal * (7.5/100)-142.80
}	
else if(sal <= 3751.05){
    tax = sal * (15/100)-354.80
}	
else if(sal <= 4664.68){
    tax = sal * (22.5/100)-636.13
}
else{
    tax = sal * (27.5/100)-869.36
}
console.log(tax)