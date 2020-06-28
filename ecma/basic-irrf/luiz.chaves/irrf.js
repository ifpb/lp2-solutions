const salary = 3000;
let taxRate = 0;
let deduction = 0;

if (salary <= 1903.98) {
  taxRate = 0;
  deduction = 0;
} else if (salary <= 2826.65) {
  taxRate = 0.075;
  deduction = 142.8;
} else if (salary <= 3751.05) {
  taxRate = 0.15;
  deduction = 354.8;
} else if (salary <= 4664.68) {
  taxRate = 0.225;
  deduction = 636.13;
} else {
  taxRate = 0.275;
  deduction = 869.36;
}

const tax = salary * taxRate - deduction;

// 95,20
console.log(tax.toFixed(2));