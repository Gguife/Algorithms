/*
  Exercicios exigem uma comparação entre indices de cada arr
  Em um jogo Bob e Alice querem descobrir quem pontua mais.
  A comparação seria da seguinte forma:
    - a[0]>b[0] -> Ponto para alice
    - a[1]<b[1] -> Ponto para bob
    - a[2]=b[2] -> nao computamos pontos

  Exemplo:
  a = [1, 2, 3]
  b = [3, 2, 1]
  resposta = [1,1]
*/


const compareTheTriplete = (a, b) =>{
  let aliceScore = 0;
  let bobScore = 0;

  for(let i = 0; i < 3; i++){
    if(a[i] > b[i]){
      aliceScore += 1;
    }
    if(a[i] < b[i]){
      bobScore += 1;
    }
  }

  return [aliceScore, bobScore];
}

const a = [1, 2, 3];
const b = [3, 2, 1];
const result = compareTheTriplete(a, b);
console.log(result);