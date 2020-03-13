
let result = "";

for (let tens = 0; tens < 10; tens++) {
  for (let units = 0; units < 10; units++) {
    // whitespace
    const whitespace = units === 9 ? "\n" : " ";
    // number
    result += tens + (units + whitespace);
  }
}

console.log(result);