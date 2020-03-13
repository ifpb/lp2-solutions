function fac(num, num2){
    for(let i=1;i<=num;i++){
        num2*=i;
    }
    console.log(num2);
}

module.exports = fac;