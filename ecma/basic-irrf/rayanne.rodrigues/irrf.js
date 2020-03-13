let salary = 2000;
let tax = 0;

if(salary<=1903.98){
    tax=0;
    console.log(tax)

}else if(salary<=2826.65){
let deduction= 142.80;
let taxRate= 7.5/100;
tax = salary * taxRate - deduction
console.log(tax.toFixed(1))

}else if(salary<=3751.05){
let deduction= 354.80;
let taxRate= 15/100;
tax = salary * taxRate - deduction
console.log(tax.toFixed(2))

}
else if(salary<= 4664.68){
let deduction= 636.13;
let taxRate= 22.5/100;
tax = salary * taxRate - deduction
console.log(tax.toFixed(2))

}else{
    let deduction= 869.36;
let taxRate= 27.5/100;
tax = salary * taxRate - deduction
console.log(tax.toFixed(2))

}