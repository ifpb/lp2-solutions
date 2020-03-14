module.exports = function fibonaci(a) {
    let x = 0;
    let y = 1;
    let result = 1;
    if (a > 1) {
        while (a > 2) {
            result = x + y;
            x = y;
            y = result
            a--;  
           
        }
        console.log(result);
        
    } 
    else if (a === 1) {
        console.log('0')
    } 
    else {
        console.log('undefined');
    }
    
}