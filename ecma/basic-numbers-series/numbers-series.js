for (let i =0; i<10; i++) {
     linha = "";
     linha += i+"0";
     for (let j = 1; j<10; j++){
         linha += " "+i+j;
     }  
     console.log(linha)   

}

console.log()

for (let i =9; i>-1; i--) {
    linha = "";
    linha += i+"9";
    for (let j = 8; j>-1; j--){
        console.log(j)
        linha += " "+i+j;

}
    console.log(linha)
}

let lista = [];
for (let i = 99; i >= 1; i--){
  if(i % 10 ===1){
    lista.push(i,'\n')
  }
  else{
    lista.push(i)
  }
}
console.log(lista.join(" "));