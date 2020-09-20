function gerarArray(inicial, dias){
    let pular;
    switch (inicial){
        case "Segunda":
            pular = 1;
            break;

        case "Terça":
            pular = 2;            
            break;
        
        case "Quarta":
            pular = 3;           
            break;
        
        case "Quinta":
            pular = 4;            
            break;
        
        case "Sexta":
            pular = 5;           
            break;
        
        case "Sábado":
            pular = 6;            
            break;

        case "Domingo":
            pular = 0;            
            break;        
    }

    lista = []
    for (let i = 0; i<pular; i++){
        lista.push("  ")
    }

    for (let i = 1; i<dias+1; i++){
        if (i<10){
            lista.push("0"+i.toString());
        }
        else {
            lista.push(i.toString());
        }

    }

    return lista;
}

function exibirCalendario(lista) {
    camposImpressos = 0;
    console.log("DOM SEG TER QUA QUI SEX SAB");
    while (camposImpressos<lista.length){
        linha = "";

        if (camposImpressos+7>lista.length){
            aImprimir = lista.length-camposImpressos
        }
        else {
            aImprimir = 7
        }

        for (let i = camposImpressos; i<camposImpressos+aImprimir; i++){
            try{
                linha += "  " + lista[i];
            }
            catch {
                break;
            }
        }
        console.log(linha.slice(1))
        camposImpressos += 7
    }
}

module.exports = {exibirCalendario, gerarArray}