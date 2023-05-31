const calculadora={
     soma: function(a,b){
          return a+b;
     },
     subtrair: function(a,b){
          return a-b;
     },
     multiplacao:function(a,b){
          return a*b;
     },
     divisao: function(a,b){
          return a/b;
     },
}


console.log(calculadora.soma(3,3));
console.log(calculadora.subtrair(5,2));
console.log(calculadora.multiplacao(10,10));
console.log(calculadora.divisao(12,3));