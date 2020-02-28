let x = 5
let y = 2

function soma(x,y){
  x = parseInt(x)
  y = parseInt(y)
  let soma = x + y;
  soma = parseInt(soma);
  return soma;
}
 
console.log(soma(x,y));