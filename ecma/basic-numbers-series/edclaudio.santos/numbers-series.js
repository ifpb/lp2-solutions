for (let i = 0; i<10; i++){
    result = ""
    for (let j = 0; j<10; j++){
        result += i.toString()+j.toString()+" "
    }
    console.log(result) 
}
console.log(" ")
for (let i = 9; i>-1; i--){
    result = ""
    for (let j = 9; j>-1; j--){
        result += i.toString()+j.toString()+" "
    }
    console.log(result) 
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