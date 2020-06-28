function fibSeries(posicao){
    let n_atual = 1;
    let n_ant = 0;
    let sequencia = [n_ant, n_atual];

    if (posicao == 1) {
        return 0;
    }
    else if (posicao < 1) {
        return undefined;
    }


    for (let i = 2; i<posicao; i++) {
        n_atual += n_ant;
        n_ant = n_atual-n_ant;

        sequencia.push(n_atual);
    }

    return(sequencia);
}

module.exports = fibSeries;