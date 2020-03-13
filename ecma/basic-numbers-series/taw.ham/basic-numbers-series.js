let nd= [];
for (let i = 0; i <= 99; i++){
    if (i % 10 ===9){
         nd.push(i,'\n') 
    } 
    else{
        nd.push(i);
    }

    }
       
console.log(nd.join(' '))

let nd2= [];
for (let i = 99; i >= 0; i--){
    if (i % 10 ===0){
         nd2.push(i,'\n') 
    } 
    else{
        nd2.push(i);
    }

    }
       
console.log(nd2.join(' '));

let nd3= [];
for (let i = 99; i >= 0; i-=2){
    if (i % 10 ===1){
         nd3.push(i,'\n') 
    } 
    else{
        nd3.push(i);
    }

    }
       
console.log(nd3.join(' '));


