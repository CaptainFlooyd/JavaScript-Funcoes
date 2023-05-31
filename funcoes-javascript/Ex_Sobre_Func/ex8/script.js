function checarTamanho(texto){
    if(texto.length > 10 ){
        return console.log("Seu texto está muito grande.")
    } else{
        return console.log("Seu texto está ideal.")
    }
}


console.log(checarTamanho("Vitor Hugo Marques de Moura"))
console.log(checarTamanho("Vitor"))