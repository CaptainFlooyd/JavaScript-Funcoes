function verificadorDeDado (dado){
    if(typeof dado === 'string'){
        console.log("Este dado é uma string.");
    }else if (typeof dado === 'number'){
        console.log("Esse dado é um number.");
    } else if (typeof dado === "boolean"){
        console.log("Esse dado é um boolean");
    }
}
console.log(verificadorDeDado(1.7));
console.log(verificadorDeDado('Vitor'));
console.log(verificadorDeDado(true));