function prime(number) {
    if (number===1 ||(number%2===0 && number!=2)){
        return false;

    }
    return true;

}
module.exports = prime;