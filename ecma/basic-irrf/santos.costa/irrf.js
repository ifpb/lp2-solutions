const salary = 3000;

if(salary <= 1903.98){
    console.log(0);
}else if(salary <= 2826){
    taxRate = 0.075;
    deduction = 142.8;
    tax = (salary * taxRate) - deduction;
    console.log(tax.toFixed(2));

}else if(salary <= 3751.05){
    taxRate = 0.15;
    deduction = 354.8;
    tax = (salary * taxRate) - deduction;
    console.log(tax.toFixed(2));

}else if(salary <= 4664.68){
    taxRate = 0.225;
    deduction = 636.13;
    tax = (salary * taxRate) - deduction;
    console.log(tax.toFixed(2));
}else{
    taxRate = 0.275;
    deduction = 869.36;
    tax = (salary * taxRate) - deduction;
    console.log(tax.toFixed(2));
}
