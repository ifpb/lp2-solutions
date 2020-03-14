module.exports = function sequence_fibo(a){
    let x = 0;
    let y = 1;
    let resul = 1;
    let lista = [];
    let lista2 = [];
    lista.push(x,y);
    if(a ===2){
        console.log('0','1','1');
    }
    else if(a > 1){
        while(a > 2){
            resul = x + y;
            lista2.push(resul);
            x = y;
            y = resul;
            a --; 
        }
        let lista3 = lista.concat(lista2);
        console.log(lista3.join(" "));
    }
    else if(a === 1){
        console.log('0');
    }
    else{
        console.log(" ");
    }   
}