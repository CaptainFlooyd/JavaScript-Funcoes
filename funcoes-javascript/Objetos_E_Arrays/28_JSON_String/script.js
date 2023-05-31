const car ={
    "marca" : "FIAT",
    "rodas" : 4,
    "doors": 2,
    "tipo": "sedan",

}
let jsonString = JSON.stringify(car);

console.log(jsonString);

let stringParaJSON = JSON.parse(jsonString);

console.log(stringParaJSON);