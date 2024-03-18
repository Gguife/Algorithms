/*
  Mini Max Sum

  Receberemos um array de inteiros positivos e devemos encontrar o menor e o maior valor da soma entre os inteiros.
  No exemplo, devemos calcular 4 dos 5 inteiros.
  Exemplo:
  arr = [1, 3, 5, 7, 9]
  A menor soma seria: 1 + 3 + 5 + 7 = 16
  A maior soma seria: 3 + 5 + 7 + 9 = 24
  Resposta: 16 24

  O array deve conter 5 elementos inteiros.
  Retornar a resposta da soma mínima e máxima dos 4 elementos do array.
*/



const MiniMaxSum = (arr) => {
  let miniNum = arr[0];
  let maxNum = arr[0];
  let totalSum = 0;


  for(let i = 0; i < arr.length; i++){
    if(arr[i] < miniNum){
      miniNum = arr[i];
    }
    if(arr[i] > maxNum){
      maxNum = arr[i];
    }

    totalSum += arr[i];
  }

  const miniSum = totalSum - maxNum;
  const maxSum = totalSum - miniNum;

  console.log(miniSum, maxSum);
}


const arr = [5,1,3,4,2]
MiniMaxSum(arr);


/*
  Lógica

  Criar as variáveis que irão armazenar o menor e maior número do array, e também a variável de soma total.
  Criar um loop para percorrer todo o array e identificar o menor e maior número.
  Criar condições para o maior e menor inteiro em sua variável.
  Fazer a soma total do array.
  Criar a variável de menor soma e subtrair a soma total com o maior número inteiro do array.
  Criar a variável de maior soma e subtrair a soma total com o menor número inteiro do array.
*/