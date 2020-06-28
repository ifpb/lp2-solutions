
let result = "";

for (let flag = 99; flag >= 1; flag -= 2) {
  if (flag  < 10) {
    result += "0"+flag;
  } else {
    result += flag;
  }
  if (flag % 10 === 1) {
    result += "\n";
  } else {
    result += " ";
  }
}

console.log(result);