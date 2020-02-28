let result = "";

for(let i = 99;i >= 0; i--){
    if(i < 10)
        result += '0'+i;
    else
        result += i
    if(i % 10 === 0)
        result += "\n";
    else
        result +=  " ";

}
console.log(result);