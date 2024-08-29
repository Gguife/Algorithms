/*
Teremos um array de numeros inteiros, o resultado da soma de dois indices ar[i] + ar[j] deve ser divisivel por K
A função deve retorna quantas vezes o resultado da soma e divisivel por este número K.

ex:
  ar = [1,3,2,6,1,2];
  k = 3;

  resposta = 5;
*/


function divisibleSumPairs(n, k, ar) {
  let count = 0;

  for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n;j++){
      if((ar[i] + ar[j]) % k === 0){
        count++;
      }
    }
  }

  return count;
}

const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];
const resultado = divisibleSumPairs(n, k, ar);
console.log(resultado); 