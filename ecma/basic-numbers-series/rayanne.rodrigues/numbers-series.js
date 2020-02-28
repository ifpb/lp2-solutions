let result= '';
let r1= '';
let r2= '';

for (let flag=0;flag<100;flag++){
    if (flag<10){
        result+= '0' +flag
    }else{
        result+=flag
    }
    if (flag %10 ===9){
        result+= '\n'
    }else{
        result += " ";
    }
}
console.log(result)

for (let flag=99;flag>-1;flag--){
    if (flag<10){
        r1+= '0' +flag
    }else{
        r1+=flag
    }
    if (flag %10 ===0){
        r1+= '\n'
    }else{
        r1+= " ";
    }
}
console.log(r1)

for (let flag=99;flag>-1;flag-=2){
    if (flag<10){
        r2+= '0' +flag
    }else{
        r2+=flag
    }
    if (flag %10 ===1){
        r2+= '\n'
    }else{
        r2 += " ";
    }
}
console.log(r2)