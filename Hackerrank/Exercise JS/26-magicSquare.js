/*
Objetivo e formar um quadrado magico com matriz de inteiros.
Receberemos 3x3 matriz "s" de inteiros no intervalo de [1-9].
Podemos converter qualquer digito a para qualquer outro digito b no intervalo [1-9] ao custo de [a-b].


Dado s, converta em um quadrado magico com custo minimo.
Imprima este custo em uma nova linha.


Exemplo:
s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

[[5, 3, 4]
[1, 5, 8]
[6, 4, 2]]

Podemos converter no seguinte quadrado magico: 
8  3  4 
1  5  9 
6  7  2

isso exigiu 3 substituicoes a custo de |5-8| + |8-9| + |4-7| = 7

output = 7

*/


function formingMagicSquare(s) {

   const magicSquares = [
      [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
      [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
      [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
      [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
      [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
      [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
      [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
      [[8, 3, 4], [1, 5, 9], [6, 7, 2]]
   ];

   let minCost = Infinity;


   for(let magic of magicSquares) {
      let cost = 0;

      for(let i = 0; i < 3; i++) {
         for(let j = 0; j < 3; j++) {
            cost += Math.abs(s[i][j] - magic[i][j]);
            console.log(cost);
         }
      }
   
      minCost = Math.min(minCost, cost);
   }

   return minCost;
}



const s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]];
const result = formingMagicSquare(s);

console.log(result);





/*
Resolvendo o quadrado magico 
1- Precisamos caluclar a constate magica:
   n = numero de linhas ou colunas do quadrado magico
   assim, o quadrado magico 3x3 tem n = 3;
   a formula da constante magica e: [n * (n2 + 1)] / 2
   soma = 3 * (3*3 + 1) / 2
   soma = 3 * 10 / 2
   soma = 30 / 2
   soma = 15

   a constante magica do quadrado e 15

2- Defina a casa 1 como sendo a do meio da linha superior.
   E apartir dela que comecaremos quando o quadrado magico tiver lados impares (3x3)

3- Preencha o restante seguindo o padrao, um para cima e um para direita.
   8 1 4
   9 6 3
   7 5 2


*/