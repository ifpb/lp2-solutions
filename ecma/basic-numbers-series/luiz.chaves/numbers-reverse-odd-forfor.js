
let result = "";

for (let tens = 9; tens >= 0; tens--) {
  for (let units = 9; units >= 1; units -= 2) {
    // whitespace
    const whitespace = units === 1 ? "\n" : " ";
    // number
    result += tens + (units + whitespace);
  }
}

console.log(result);