/*
Jogador joga um jogo arcade onde utiliza um sistema de classificacao Dense Ranking;
  - O jogador com a maior pontuacao e classificado no ranking como numero 1
  - Jogadores com numeros iguais recebem o mesmo numero de classificacao
  - Os proximos jogadores recebem o numero de classifcacao seguinte


ranked = [100, 90, 90, 80]
player = [70, 80, 105]

output = [4, 3, 1]

- ranked -> Pontuacoes da tabela de classificacao
- player -> Pontuacoes dos jogadores

- output -> Classificacao do jogador apos cada nova pontuacao

*/

function climbingLearderBoard(ranked, player) {
  // Definir a posicao de cada pontuacao
  let newRankedArr = [...new Set(ranked)];
  let output = [];
  let index = newRankedArr.length;
  
  for(let score of player) {
    while(index > 0 && score >= newRankedArr[index - 1]) { 
      index--;
    }
    output.push(index + 1);
  }

  return output;  
}


const ranked = [100, 100, 50, 40, 40, 20, 10]; // 100 -> 1 50 -> 2 40 -> 3 20 -> 4 10 -> 5 (menor que 10 -> 6)
const player = [5, 25, 50, 120];


const result = climbingLearderBoard(ranked, player);
console.log(result);
