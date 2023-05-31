let carro = {
    porta: 2,
    rodas : 4,
    porta_malas: '200l'
};


let adcionais = {
    tetoSolar: true,
    arcon: true,
    potencia: '200cv',
};

console.log(carro)

Object.assign(carro,adcionais);

console.log(carro)