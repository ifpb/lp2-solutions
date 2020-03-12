var op= "+";
let v1=1;
let v2=1;
let v3=0;

function mostrar(op,v1,v2,v3){
if (op === "+"){
    v3=v1+v2;
    console.log(v3);
}else if(op=== "-"){
    v4=v1-v2;
    console.log(v4);
}else if(op === '*'){
    v5=v1*v2;
    console.log(v5);
}else{
    v6=v1/v2;
    console.log(v6);
};
}
export {mostrar,op,v1,v2,v3}