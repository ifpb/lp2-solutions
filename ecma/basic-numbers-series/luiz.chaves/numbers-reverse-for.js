
let result = "";

for (let flag = 99; flag >= 0; flag--) {
  if (flag  < 10) {
    result += "0"+flag;
  } else {
    result += flag;
  }
  if (flag % 10 === 0) {
    result += "\n";
  } else {
    result += " ";
  }
}

console.log(result);