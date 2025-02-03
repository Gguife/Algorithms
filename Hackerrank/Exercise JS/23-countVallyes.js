/*
  Exemplo
  steps = 8 = [DDUUUUDD];
 
O caminhante entra primeiro em um valeunidades de profundidade. Então eles sobem e sobem em uma montanhaunidades de altura. Finalmente, o caminhante retorna ao nível do mar e termina a caminhada.

Descrição da função

countingValleys tem o(s) seguinte(s) parâmetro(s):

  int steps : o número de passos na caminhada
  string path : uma string que descreve o caminho
  Devoluções

  int: o número de vales percorridos
  Formato de entrada

  A primeira linha contém um inteiro, o número de passos na caminhada.
  A segunda linha contém uma única string, decaracteres que descrevem o caminho.

*/


function countVallyes(steps, path) {
  let altitude = 0;
  let valleys = 0;

  for(let i = 0; i < steps; i++) {
    if(path[i] === 'U') {
      altitude++;
    }else if(path[i] === 'D') {
      altitude--;
    }

    if(altitude === 0 && path[i] === 'U') {
      valleys++;
    }
  }

  return valleys;
}


const steps = 8;
const path = 'DDUUUUDD'
const result = countVallyes(steps, path);

console.log(result);