num1 = 1;
num2 = 5;
num3 = 8;


function imprimirNumeros(...args){
    for (let i = 0; i <args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(num1,num2,num3);
console.log("Pausa");
imprimirNumeros(num2,num3);
console.log("Pausa");

imprimirNumeros(2,6,7,8,9,5,6,2,3,1)