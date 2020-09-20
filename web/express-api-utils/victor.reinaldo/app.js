const express = require("express");

const app = express();
const port = 3000;

// Manda o Express interpretar o conteudo dos requests como json antes de passar pras outras funções
app.use(express.json());

// Retorna o maior "numero" de uma lista de strings
function max(lista) {
  maior = parseFloat(lista[0]);

  for (let i = 1; i<lista.length; i++){
    numero = parseFloat(lista[i])
    if (numero > maior) {
      maior = numero;
    };
  };

  return maior

};

// Retorna o menor "numero" de uma lista de strings
function min(lista) {
  menor = parseFloat(lista[0]);

  for (let i = 1; i<lista.length; i++){
    numero = parseFloat(lista[i])
    if (numero < menor) {
      menor = numero;
    };
  }; 

  return menor
}


// Resposta do post pra lowercase
app.post("/util/text/lowercase", (req, res) => {
  // Obtem o input
  const {input} = req.body;

  // Monta a resposta
  let result = {
    action:"lowercase",
    input,
    output:input.toLowerCase()
  };

  // Envia a resposta
  res.json(result);
});

// Resposta do post pra uppercase
app.post("/util/text/uppercase", (req, res) => {
  // Obtem o input
  const {input} = req.body;

  // Monta a resposta
  let result = {
    action:"uppercase",
    input,
    output:input.toUpperCase()
  };

  // Envia a resposta
  res.json(result);
});

// Resposta do get para minimum
app.get("/util/number/minimum", (req, res) => {
  // Obtem o input
  const input = req.query.input.split(",");
  
  // Monta a resposta 
  const result = {
    action:"minimum",
    input,
    output:min(input)
  };

  // Envia a resposta
  res.json(result);
});

// Resposta do get para maximum
app.get("/util/number/maximum", (req, res) => {
  // Obtem o input
  const input = req.query.input.split(",");

  // Monta a resposta 
  const result = {
    action:"maximum",
    input,
    output:max(input)
  };

  // Envia a resposta
  res.json(result);
});


// Manda o express ouvir na porta definida
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
