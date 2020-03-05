function calculadora(v1,v2,op){
    if(op == "+"){
        console.log(v1+v2);
    } 
    else if(op == "-"){
        console.log(v1-v2);
    } 
    else if(op == "*"){
        console.log(v1*v2);
    
    } 
    else if(op == "/"){
        console.log(v1/v2);
    }
    else{
      console.log("Isso não é uma operação!")
    }
    }
    
    calculadora(1,1,"+")