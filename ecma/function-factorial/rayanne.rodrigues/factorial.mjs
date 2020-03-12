let vn1= 4;
let vn2 = 1;

function mostrar(vn1,vn2){
    for(var i = 1;i<=vn1;i++){
        vn2*=i;
        
    }
    console.log(vn2)
}


export {mostrar,vn1,vn2}