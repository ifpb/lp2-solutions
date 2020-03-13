let result = "";

for(let i = 0;i < 100; i++){
    if(i < 10)
        result += '0'+i;
    else
        result += i
    if(i % 10 === 9)
        result += "\n";
    else
        result +=  " ";

}
console.log(result);