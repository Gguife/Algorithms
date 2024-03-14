/*
  Dado um array de inteiros, devemos calcular as razões.
  Os elementos do array são positivos, negativos e zero.
  Devemos retornar o valor decimal de cada fração.

  arr [1,1,0,-1,-1]
  a razão entre eles seria de 2/5 para positivos
  a razão entre eles seria de 2/5 para negativos
  a razão entre eles seria de 1/5 para zeros

  Devemos retornar o resultado das divisões com 6 casas decimais.
*/


const PlusMinus = (arr) => {
  let n = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      positiveCount++;
    }else if (arr[i] < 0){
      negativeCount++
    }else{
      zeroCount++
    }
  }

  const positiveRatio = (positiveCount / n).toFixed(6);
  const negativeRatio = (negativeCount / n).toFixed(6);
  const zeroRatio = (zeroCount / n).toFixed(6);

  return [positiveRatio, negativeRatio, zeroRatio];
}

const array = [-4, 3, -9, 0, 4, 1];
const ratios = PlusMinus(array);
console.log(ratios);

/*
  Lógica

  recebemos um array com n elementos

  1. Identificar a razão (V)
  2. Identificar os números positivos, negativos e zeros (V)
  3. Contabilizar os números com seus respectivos sinais ou nulos (v)
  4. Seria fazer a divisão dos números contabilizados
  5. Retornar o resultado com 6 casas decimais
*/