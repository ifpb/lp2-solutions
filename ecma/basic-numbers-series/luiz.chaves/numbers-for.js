
let result = "";

for (let flag = 0; flag < 100; flag++) {
  if (flag  < 10) {
    result += "0"+flag;
  } else {
    result += flag;
  }
  if (flag % 10 === 9) {
    result += "\n";
  } else {
    result += " ";
  }
}

console.log(result);