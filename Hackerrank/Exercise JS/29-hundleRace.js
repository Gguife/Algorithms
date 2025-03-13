/*
Um player de vídeo reproduz um jogo em que o personagem compete em uma corrida de obstáculos. 
Os obstáculos têm alturas variadas, e os personagens têm uma altura máxima que podem pular. 
Há uma poção mágica que eles podem tomar que aumentará sua altura máxima de salto em 1 unidade para cada dose. 
Quantas doses da poção o personagem deve tomar para conseguir pular todos os obstáculos.
Se o personagem já conseguir superar todos os obstáculos, retorne 0.


Ex:
  height = [1, 2, 3, 3, 2]
  k = 1

  O personagem pode pular 1 unidade alta incialmente deve elvar 3 - 1 = 2 doses 
  de poção para conseguir pular todos os obstáculos.


int k -> a Altura que o personagem pode pular naturalmente
int height[n] -> Alturas de cada obstaculo
outout -> int: numero minimo de dose necessarias, sempre 0 ou mais.
*/

const height = [1, 2, 3, 3, 2];
const k = 1;



function hurdleRace(k, height) {
  let maxNum = 0;
  let result = 0;

  for(let i = 0; i < height.length; i++) {
    if(maxNum < height[i]) {
      maxNum = height[i];
    }
  }

  if(k < maxNum) {
    result = maxNum - k;
    return result;
  }

  return 0;
}
// const result = hurdleRace(k, height);
// console.log(result);


//Better version
function hundleRace2(k, height) {
  const maxNum = Math.max(...height);
  return Math.max(0, maxNum - k);
}
const result2 = hundleRace2(k, height);
console.log(result2);

