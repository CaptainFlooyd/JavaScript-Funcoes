function guardarSoma (x){
    return function soma1(y){
        return x+y;
    }
}
let soma1 = guardarSoma(2);
console.log(soma1(5))


let soma2 = soma1
console.log(soma2(7))



function contador (i){
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    return somarContador
}

let meuContador = contador(5);

meuContador();
meuContador();
meuContador();

let contador2 = contador(1);

contador2();
contador2();
contador2();
