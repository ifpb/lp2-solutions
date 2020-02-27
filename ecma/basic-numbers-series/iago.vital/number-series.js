let lista = []
for (let i=0; i<100; i++){
  if(i % 10 ===9){
    lista.push(i,"\n")
  }
  else{
    lista.push(i);
  }
}
console.log(lista.join(" "));


let lista2 = []
for (let i= 99; i >= 0; i--){
  if(i % 10 === 0){
    lista2.push(i,"\n")
  }
  else{
    lista2.push(i);
  }
}
console.log(lista2.join(" "));


let lista3 = []
for (let i = 99; i >= 0; i -=2){
  if(i % 10 === 1){
    lista3.push(i,"\n")
  }
  else{
    lista3.push(i);
  }
}
console.log(lista3.join(" "));