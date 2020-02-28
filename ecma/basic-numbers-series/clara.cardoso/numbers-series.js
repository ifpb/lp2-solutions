let result = '';

for (let num = 0; num <= 99; num ++){
    if (num < 10)
        result += "0" + num;
    else 
        result += num
    if (num % 10 === 9)
        result += "\n";
    else
        result += " ";
}

console.log(result);