/*
Etendendo o algoritmo Hourglass Sum em arrays 2D

A estrutura de uma Ampulheta em Arrays 2D
  O desafio gira na identificacao e soma de valores e um parametro especifico de ampulheta.
  O padrao especifico e defino como: 
  a b c
    d
  e f g

  Cada "ampulheta" e uma conlecao de valores que corresponde a esse formato dentro do array

Exemplo:
  1 1 1 0 0 0
  0 1 0 0 0 0
  1 1 1 0 0 0
  0 0 2 4 4 0
  0 0 0 2 0 0
  0 0 1 2 4 0

  O objetivo e encontrar a maior soma de ampulheta neste array.

  A primeira ampulheta possivel neste array:
  1 1 1
    1
  1 1 1

  soma = 1 + 1 + 1 + 1 + 1 + 1 + 1 = 7

  Outra ampulheta que no caso representa a maior soma seria
  2 4 4 
    2
  1 2 4

  soma = 19


OBS = Array tem o tamanho 6x6
*/


function hourglassSum(arr) {
  let maxSum = -Infinity;

  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      let top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      let medium = arr[i+1][j+1];
      let bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];


      let hourglassSum = top + medium + bottom;

      if(hourglassSum > maxSum) {
        maxSum = hourglassSum;
      }
    
    }
  }

  return maxSum;
}

const arr = [
  [-1, -1,  0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

const result = hourglassSum(arr);
console.log(result);


/**

- Inidicamos o maxSum como valor default o -Inifinty para que a condicao tambem se estabeleca a numeros negativa

- O array possue o tamanho fixo 6x6
  Porem cada ampulheta possue o tamanho 3x3

inserimos que o nosso index e < 4 para que nao ultrapassemos o tamanho do array
(6x6)

- Pegamos a soma de cada coluna 3x3 da ampulheta
top = 3 elementos -> arr[i][j], arr[i][j + 1], arr[i][j + 2]
medium = 1 elementos -> arr[i+1][j+1]
bottom = 3 elementos -> arr[i + 2][j], arr[i + 2][j + 1], arr[i + 2][j + 2]

- Salvamos a soma e uma nova variavel 
- Validacao -> caso soma das colunas for > maxSum 
  - salvar o novo valor na variavel maxSum
*/