/*
  A casa de SAM esta localizada entre uma ávore de maças e outra arvore de laranjas
  S e T tem como valores as unidades onde se localizam a casa
  a e b tem como valores as unidades onde se Localizam as arvores
  m e n tem como valores as unidades onde a maça e a laranja cairam e o array determina sua quantidade(maças e laranjas)

  Temos que decobrir quantas maças e laranjas cairam dentro da casa de SAM

  Exemplo: 
  s = 7
  t = 10
  a = 4
  b = 12

  m = [2, 3 , -4]
  o = [3, -2, -4]

  fazemos o calculo de onde as maças e lanranjas se encontram depois da queda
  [2 + 4, 3 + 4 , -4 + 4] = [6,7,0]
  [3 + 12, -2 + 12, -4 + 12] = [15,10,8]

  verificamos quantas dessas frustas cairam na casa de SAM
  a faixa é entre 7 - 10
  resposta = 1(maça), 2(laranja)
*/

function appleAndOrange(s, t, a, b, apple, orange){
  let applesResult = 0;
  let orangesResult = 0;
  
  for(let i = 0; i < apple.length; i++){
    const sumApplesUnit = apple[i] + a;
    if(sumApplesUnit >= s && sumApplesUnit <= t){
      applesResult++;
    }
  }

  for(let j = 0; j < orange.length; j++){
    const sumOrangeUnit = orange[j] + b;
    if(sumOrangeUnit >= s && sumOrangeUnit <= t){
      orangesResult++;
    }
  }
  
  console.log(applesResult, orangesResult);
}

const s = 7
const t = 10
const a = 4
const b = 12
const m = [2, 3 , -4]
const o = [3, -2, -4]
appleAndOrange(s, t, a, b, m, o)