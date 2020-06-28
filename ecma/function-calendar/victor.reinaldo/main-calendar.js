const inicial = "Segunda"
const dias = 31

let calendar = require("./calendar")

lista = calendar.gerarArray(inicial, dias)
calendar.exibirCalendario(lista);