const n = 10;
let result = 0;

for (let flag = 1; flag <= n; flag++) {
  result += 1 / flag;
}

// 2,9289682539682538
console.log(result)