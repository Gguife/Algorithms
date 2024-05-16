/*

scores = [12, 24, 10, 24];
As pontuaçoes estoa na mesma ordem dos jogos disputados. 

A funcao deve retornar um array contendo o numero de vez que ela quebrou o recorde máximo e o numero  de vezes que ela quebour o record mínimo.

Exemplo de entrada 0

9 
10 5 20 20 4 5 2 25 1

Exemplo de saída 0
2 4

*/


function breakingRecords(scores){
  let minGamesScore = scores[0];
  let maxGamesScore = scores[0];
  let resultMax = 0;
  let resultMin = 0;

  for(let i = 1; i < scores.length; i++){
    if(scores[i] > maxGamesScore){
      maxGamesScore = scores[i];
      resultMax++;
    }
    else if(scores[i] < minGamesScore){
      minGamesScore = scores[i];
      resultMin++;
    }

  }

  const result = [resultMax, resultMin];

  return result; 
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
breakingRecords(scores);


