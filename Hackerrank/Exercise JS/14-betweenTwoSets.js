/*
Haverá duas matrizes de inteiros. Determinaremos todos os inteiros que satisfaçam as duas condições a seguir:
  1. Os elementos da primeira matriz são todos fatores do inteiro que está sendo considerado.
  2. O inteiro sendo considerado é um fator de todos os elementos da segunda matriz.

Entendendo melhor: Estamos procurando números que são divisíveis por todos os elementos de 'a' e que também são divisores de todos os elementos de 'b'.
*/



function getTotalX(a, b){
  let count = 0;

  for(let i = 1; i <= 100; i++){
    if(a.every(int => i % int == 0)){
      if(b.every(int => int % i == 0)){
        count++;
      }
    }
  }

  return count;
}

const a = [2, 6];
const b = [24, 36];
getTotalX(a, b);



/*
  1. Criaremos uma variável para contar os valores.
  2. Faremos um loop que percorrerá até 100 números.
  3. Criaremos uma condição para verificar se o resto da divisão de 'i' por cada elemento de 'a' será igual a 0.
  4. Dentro da primeira condição, criaremos uma condição para verificar se o resto da divisão de cada elemento de 'b' por 'i' será igual a 0.
  5. Por fim, incrementaremos a variável que contará os valores.
*/