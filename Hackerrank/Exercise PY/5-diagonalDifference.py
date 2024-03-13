# Vamos realizar soma das diagonais de matriz e no final tirar a diferença do resultado das somas das diagonais
# Exemplo:
#    1 2 3
#    4 5 6
#    9 8 9 
# soma da diagonal 1: 1+5+9=15 
# soma da diagonal 2: 3+5+9=17
# resultado final da diferença entre a soma das duas diagonais: 15-17=2


def DiagonalDifference(matriz):
  firstSumDiagonal = 0;
  secondSumDiagonal = 0;
  difference = 0;
  
  for i in range(len(matriz)):
    firstSumDiagonal += matriz[i][i];
    secondSumDiagonal += matriz[i][len(matriz) - 1 - i];
  
  difference = abs(firstSumDiagonal - secondSumDiagonal);
  print(difference);

matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

DiagonalDifference(matriz);