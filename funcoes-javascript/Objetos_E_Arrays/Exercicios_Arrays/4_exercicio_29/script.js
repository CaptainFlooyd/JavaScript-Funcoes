let onibus = {
    portas: 2,
    rodas:8,
    passageirosMax:40,
};

delete onibus.rodas;

console.log(onibus.rodas);

onibus.janelas = 20;

console.log(onibus);
console.log(onibus.janelas);
