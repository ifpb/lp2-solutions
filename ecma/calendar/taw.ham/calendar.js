module.exports = function calendario(a, b) {
    let mes = ["dom", 'seg', 'ter', 'qua', 'qui', 'sex', 'sab\n'];
    let lista = []
    let posicao = 0;
    if (b <= 31) {
        if (a === "dom") {
            for (let i = 1; i <= b; i++){
                posicao++;
                mes.push(i);
                if (posicao % 7 === 0){
                    mes.push("\n");
                }
            }
            console.log(mes.join(" "));
        } 
        else if (a === "seg"){
            posicao = 2
            mes.push("  ")
            mes[9]= 1;
            for(let i = 2; i <= b; i++){
                posicao ++;
               
                mes.push(i)
                if(posicao % 7 === 0){
                    mes.push("\n")
                }
                console.log(mes.join(' '))
            }
            console.log(mes.join(' '))
        }
        else if (a === "ter"){
            mes.push("  ");
            mes.push("   ")
            mes[10] = 1;
            posicao = 3
            for(let i = 2; i <= b; i++){
                posicao ++;
                mes.push(i)
                if(posicao % 7 === 0){
                    mes.push("\n")
                }
            }
            console.log(mes.join(' '))
        }
        else if (a === "qua"){
            mes.push("  ");
            mes.push("   ");
            mes.push("   ");
            mes[11] = 1;
            posicao = 4;
            for(let i = 2; i <= b; i++){
                posicao ++;
                mes.push(i)
                if(posicao % 7 === 0){
                    mes.push("\n")
                }
               
            }
            console.log(mes.join(' '))
        }
        else if (a === "qui"){
            mes.push("  ");
            mes.push("   ");
            mes.push("   ");
            mes.push("   ")
            mes[12] = 1;
            posicao = 5;
            for(let i = 2; i <= b; i++){
                posicao ++;
                mes.push(i)
                if(posicao % 7 === 0){
                    mes.push("\n")
                }
               
            }
            console.log(mes.join(' '))
        }
        else if (a === "qui"){
            mes.push("  ");
            mes.push("   ");
            mes.push("   ");
            mes.push("   ")
            mes[12] = 1;
            posicao = 5;
            for(let i = 2; i <= b; i++){
                posicao ++;
                mes.push(i)
                if(posicao % 7 === 0){
                    mes.push("\n")
                }
            }
            console.log(mes.join(' '))
        }
        else if (a === "sex"){
            mes.push("  ");
            mes.push("   ");
            mes.push("   ");
            mes.push("   ");
            mes.push("   ");
            mes[13] = 1;
            posicao = 6;
            for(let i = 2; i <= b; i++){
                posicao ++;
                mes.push(i)
                if(posicao % 7 === 0){
                    mes.push("\n")
                }
            }
            console.log(mes.join(' '))
        }
        else{
            mes.push("  ");
            mes.push("   ");
            mes.push("   ");
            mes.push("   ");
            mes.push("   ");
            mes.push("   ");
            mes[14] = 1;
            posicao = 7;
            mes.push("\n");
            for(let i = 2; i <= b; i++){
                posicao ++;
                mes.push(i);
                if(posicao % 7 === 0){
                    mes.push("\n")
                }  
            }
            console.log(mes.join(' '))
        }
    }
}
