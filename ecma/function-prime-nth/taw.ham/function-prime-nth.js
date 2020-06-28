module.exports = function numero_primo(a){
    let lista = [2,3,5,7];
for(let i = 2; i <= 100; i++){
    if(i % 2 === 0 || i % 3 === 0 || i % 4 === 0 || i % 5 === 0 || i % 7 === 0){
       continue
    }
       else{
            lista.push(i)   
       }
    } 
    console.log(lista[a -1]);
}
