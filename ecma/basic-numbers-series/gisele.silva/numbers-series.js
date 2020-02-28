let result = ""
for(i = 0; i < 100; i++){
    if(i<10)
    result += "0"+i
    else
    result += i
    if(i%10===9)
        result += "\n"
    else
        result += " "
    
}
console.log(result)

let result2 = ""
for(i = 99; i >= 0; i--){
    if(i%10===9)
        result2 += "\n"
    else
        result2 += " "
    if(i<10)
    result2 += "0"+i
    else
    result2 += i
    
    
}
console.log(result2)

let result3 = ""
for(i = 99; i >= 0; i-=2){
    if(i%10===9)
        result3 += "\n"
    else
        result3 += " "
    if(i<10)
    result3 += "0"+i
    else
    result3 += i
    
    
}
console.log(result3)

