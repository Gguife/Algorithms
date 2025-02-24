/*
  Dado um conjunto de inteiros, encontre o maior subconjunto onde a diferença absoluta entre quaisquer dois elementos é menor ou igual a 1.

  exemplo:
  a = [1,1,2,2,4,4,5,5,5]
  
  R = existem 2 subarrays que atendem o criterio -> [1,1,2,2], [4,4,5,5,5]
      o comprimento maximo do subarray tem 5 elementos.

  output = o comprimento do maior subarray que atende o criterio -> 5
 
*/





function pickingNumbers(a) {
  let freq = new Map();
  let maxLen = 0;

  //Preencher o array de frequencia
  for(let num of a) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for(let [num, count] of freq.entries()) {
    const nextNum = freq.get(num + 1) || 0;
    maxLen = Math.max(maxLen, count + nextNum); 
  }

  return maxLen;

}


const a = [4,6,5,3,3,1];
const result = pickingNumbers(a);

console.log(result);