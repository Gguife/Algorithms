/*
Se o gato A pegar o mouse primeiro - retorne cat A
Se o gato B pegar o mouse primeiro - retorne cat B
Se ambos os gatos alcancarem o mouse ao mesmo tempo, imprima Mouse C

Exemplo:
x = 2    x -> gato A 
y = 5    y -> gato B
z = 4    z -> mouse


R = Se o gato A esta a 2 posicoes do mouse e o gato B esta a uma unidade do mouse,
vou imprimir Cat B.



output = string;

*/

function catAndMouse(x, y, z) {
  //Pegar posicao do gato A e dimunuir com a posicao do mouse 
  let catA = Math.abs(x - z); 
  let catB = Math.abs(y - z); 

  console.log(catA)
  console.log(catB)
  
  //Pegar posicao do gato b e dimunuir com a posicao do mouse 
  //Se gato A e maior que gato B - retorno Cat B
  if(catA > catB) {
    return 'Cat B';
  } else if(catB > catA) {
    //Se gato B e maior que gato A - retorno Cat A
    return 'Cat A';
  }

  //Se as condicoes nao forem atendidas - retorno Mouse C
  return 'Mouse C';

}


const x = 2;
const y = 5;
const z = 4;
const result = catAndMouse(x, y, z);
console.log(result);
