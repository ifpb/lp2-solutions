let salary = 3000;
var tax = 0;
 
if(salary <= 1903.98){
   tax = 0;
} else if (salary >= 1903.99 && salary <= 2826.65){
   tax = salary * (7.5/100) - 142.80;
} else if (salary >= 2826.66 && salary <= 3751.05){
   tax = salary * (15/100) - 354.80;
} else if (salary >= 3751.06 && salary <= 4664.68){
   tax = salary * (22.5/100) - 636.13;
} else if (salary >= 4664.68) {
   tax = salary * (27.5/100) - 869.36;
}
console.log(tax);