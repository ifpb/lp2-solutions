var result = "";
var num;
var esp;
for (var i = 0; i<=99; i++){
    if(i%10===9){
        esp = '\n'
    }
    else{
        esp = " "
    }
    if(i<10){
        num = `0${i}`
    }
    else{
        num = i
    }
    result += num + esp
}
console.log(result)

var resul = "";
var nu;
var es;
for (var i = 99; i>=0; i--){
    if(i%10===0){
        es = `\n`
    }
    else{
        es = " "
    }
    if(i<10){
        nu = `0${i}`
    }
    else{
         nu = i
    }
    resul += nu + es
}
console.log(resul)

var resu = "";
var n;
var e;
for (var i = 99; i>=0; i-=2){
    if(i%10===1){
        e = `\n`
    }
    else{
        e = " "
    }
    if(i<10){
        n = `0${i}`
    }
    else{
         n = i
    }
    resu += n + e
}
console.log(resu)