module.exports= function triangulo(a,b,c){
    if((a >= b + c) || (b >= a + c) || (c >= a + b)){
        console.log('none');
    }
    else{
        if ((a==b) && (a==c)){
            console.log('equilateral');
        }
        else if((a != b) && (a != c) && (b != c)){
            console.log('scalene');
        }
        else{
            console.log('isosceles');
        }
    }   
}
