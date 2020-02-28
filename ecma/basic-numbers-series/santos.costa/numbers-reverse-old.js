let result = "";

for(let i = 99;i >= 0; i--){
    if(i < 10 && i % 2 !=0)
        result += '0'+i;
    else if (i % 2 != 0)
        result += i
    if(i % 10 === 0)
        result += "\n";
    else
        result +=  " ";

}
console.log(result);