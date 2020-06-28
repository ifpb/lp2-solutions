function checarTriangulo(l1, l2, l3) {
    let iguais = 0;

    if (!((l1+l2>l3) && (l1+l3>l2) && (l2+l3>l1))) {
        return "none";
    }    

    if (l1 === l2) {
        iguais++;
    }
    if (l1 === l3) {
        iguais++;
    }
    if (l2 === l3) {
        iguais++;
    }

    if (iguais === 3) {
        return "equilateral";
    }
    else if (iguais === 1){
        return "isosceles";
    }
    else {
        return "scalene";
    }
}

module.exports = checarTriangulo;