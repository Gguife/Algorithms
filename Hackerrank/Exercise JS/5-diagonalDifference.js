// Vamos realizar soma das diagonais de matriz e no final tirar a diferença do resultado das somas das diagonais
// Exemplo:
//    1 2 3
//    4 5 6
//    9 8 9 
// soma da diagonal 1: 1+5+9=15 
// soma da diagonal 2: 3+5+9=17
// resultado final da diferença entre a soma das duas diagonais: 15-17=2

const DiagonalDifference = (matriz) =>{
  let firstSumDiagonal = 0;
  let secondSumDiagonal = 0;
  let difference = 0;

  for(let i = 0; i < matriz.length; i++){
    firstSumDiagonal += matriz[i][i];
    secondSumDiagonal += matriz[i][matriz.length - 1 - i]
  }

  difference = Math.abs(firstSumDiagonal - secondSumDiagonal);
  return difference;
}


const matriz = [[1,2,3],
                [4,5,6],
                [9,8,9]];

const result = DiagonalDifference(matriz);
console.log(result);


/*
  1,2,3 depois 3,2,1 
  Na primeira diagonal eu posso incrementar mais 1, onde iremos focar no inidice 0 da primeira linha, +1 onde iremos para o inidice 1 e depois o indice 2
  Na segunda diagonal eu posso subitrair menos 1, onde iremos focar no inidice 3 da primeira linha, -1 onde irmeos para inidice 1 e depois indice 0
*/