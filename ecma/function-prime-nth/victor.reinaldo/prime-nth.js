function checarPrimo(n, primos){
    for (let i = 3; i<primos.length; i+=2){
        if (n%i===0) {
            return false;
        }
    }
    return true;
}

function encontrarPrimo(p){
    let primos = [2];
    n_atual = 3;

    while (primos.length < p) {
        if (checarPrimo(n_atual, primos)) {
            primos.push(n_atual);
        }
        n_atual += 2;
    }

    return primos[primos.length - 1]
}

module.exports =  encontrarPrimo