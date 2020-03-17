function check(l1, l2, l3){
    if(l1 >= l2 + l3 || l2 >= l1 + l3 || l3 >= l1 + l2){
        return 'none';
    }else{
        if(l1 == l2 && l2 == l3){
            return 'equilateral';
        }else if(l1 != l2 && l2 != l3 && l3 != l1){
            return 'scalene';
        }else{
            return 'isosceles';
        }

    }
}
export { check };