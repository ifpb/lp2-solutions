function fatorial(n, result_atual=1) {
    if (n<2) {
        return result_atual;
    }
    
    result_atual *= n;
    return(fatorial(n-1, result_atual));
}

module.exports = fatorial;