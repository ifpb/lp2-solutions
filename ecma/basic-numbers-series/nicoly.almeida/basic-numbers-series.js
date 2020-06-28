let result = '';

for (let number = 0; number < 100; number ++){
    if (number < 10){
        result += "0" + number;

    }else{
        result += number    

    }if (number % 10 === 9){
        result += "\n";
    
    }else {
        result += " ";
    
    }
    
}

console.log(result)