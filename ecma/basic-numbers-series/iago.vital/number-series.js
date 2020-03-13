let lista = [""]
for (let i=0; i<100; i++){
  if (i < 10){
    lista.push("0"+i);
  }
  else{
    lista.push(i);
  }

  if(i % 10 ===9){
    lista.push("\n")
  }
  else{
    lista.push(" ");
  }
}
console.log(lista.join(" "));


let lista2 = [""]
for (let i = 99; i >= 0; i--){
  if (i < 10){
    lista2.push("0"+i);
  }
  else{
    lista2.push(i);
  }

 if(i % 10 ===9){
    lista2.push("\n")
  }
  else{
    lista2.push(" ");
  }
}
console.log(lista2.join(" "));


let lista3 = [""]
for (let i = 99; i >= 0; i -=2){
  if (i < 10){
    lista3.push("0"+i);
  }
  else{
    lista3.push(i);
  }

  if(i % 10 === 1){
    lista3.push("\n")
  }
  else{
    lista3.push(" ");
  }
}
console.log(lista3.join(" "));