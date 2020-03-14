let a = 2;
let mult = 1;
for (let i = 1; i <= a; i++) {
    mult *= i
}

module.exports = function fatorial(a) {
    let mult = 1;
    for (let i = 1; i <= a; i++) {
        mult *= i;
        
    }
    return mult
}