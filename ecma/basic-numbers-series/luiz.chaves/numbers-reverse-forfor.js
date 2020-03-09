
let result = "";

for (let tens = 9; tens >= 0; tens--) {
  for (let units = 9; units >= 0; units--) {
    // whitespace
    const whitespace = units === 0 ? "\n" : " ";
    // number
    result += tens + (units + whitespace);
  }
}

console.log(result);