/*
  Há uma grande pilha de meias que devem ser combinadas por cor.
  Dado um array de inteiros representando a cor de cada meia, determine quantos pares de meias com cores correspondentes existem.

  Exemplo:
  n = 7
  ar = [1, 2, 1, 2, 1, 3, 2];

  Existem um par de meias da cor 1, um par de meias da cor 2 e 3 outras tres meias sem pares de cores distintas. 

  A função segue com os seguintes parametros:
    - int n: É o numero de meias na pilha
    - int ar[n]: As cores dos pares de meias


  Devermos retorna em nossa função os números de pares de meias.
*/

function sockMerchant(n, ar){
  let colorCount = new Map();
  let pairs = 0;
  
  for(let i = 0; i < n; i++){
    const color = ar[i];

    if(colorCount.has(color)){
      colorCount.set(color, colorCount.get(color) + 1);
    }else{
      colorCount.set(color, 1);
    }
  }

  colorCount.forEach((count) => {
    pairs += Math.floor(count / 2);
  })

  return pairs;
}

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
sockMerchant(n, ar);