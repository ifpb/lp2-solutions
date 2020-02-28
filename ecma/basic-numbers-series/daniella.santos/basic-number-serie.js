let lista = [];
for (let i = 0; i <= 99; i++){
    if(i % 10 === 9){
        lista.push(i,"\n");
        
    }
    else{
        lista.push(i);
    }
}
console.log(lista.join(" "))