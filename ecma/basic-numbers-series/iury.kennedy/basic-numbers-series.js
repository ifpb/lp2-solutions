let result = ""

for(let n = 0; n < 100; n++){
    if(n < 10)
    result += "0" + n;
    else
    result += n
    if(n % 10 === 9)
    result += "\n";
 else 
    result += " ";
}

console.log(result)

