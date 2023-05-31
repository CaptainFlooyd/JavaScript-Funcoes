let numeros1 = [1,5,9,10,12,19,20,15];
let numeros2 = [1,2,3,4];
let numeros3 = [1,2,3,4,5,6,7,8,9,10];
let numeros4 = [1,2,3];
function verificarElementosArrays(arr){
     if (arr.length >= 5){
          console.log("Muitos elementos");
     }else{
          console.log("Poucos elementos");
     }
}


verificarElementosArrays(numeros1);
verificarElementosArrays(numeros2);     
verificarElementosArrays(numeros3);
verificarElementosArrays(numeros4);