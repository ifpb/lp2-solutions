module.exports = function primo(a){
    let cont = 0
    for(let i = 1; i <= a; i++){
        if (a / i == 1 || a / i == a || a/i ==i){
            cont ++;
            
        }
    }
    if(cont == 2){
        console.log('true');
    }
    else{
        console.log('false');
    }

}
