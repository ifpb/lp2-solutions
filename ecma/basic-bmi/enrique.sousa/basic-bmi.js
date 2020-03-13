const weight = 200;

const height = 1.5;

var IMC = weight/height;

if (IMC < 18.5) {
    console.log("Obesity")
} else if (IMC <= 24.9) {
    console.log("Normal weight")
} else if (IMC <= 29.9) {
    console.log("Overweight") 
    } else {
        console.log("Obesity")
    };
    