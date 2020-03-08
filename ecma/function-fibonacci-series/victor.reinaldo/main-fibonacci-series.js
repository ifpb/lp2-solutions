const posicao = 6;

let fibSeries = require("./fibonacci-series");

let result = "";
let lista = fibSeries(posicao);

result += lista[0];

for (let i=1; i<posicao; i++){
    result += ","+" "+ lista[i];
}

console.log(result);