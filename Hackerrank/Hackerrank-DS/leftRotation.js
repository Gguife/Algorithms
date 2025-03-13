/*
Operacao em uma matriz circular desloca cada um dos elementos da matriz 1 unidade para esquerda.
Os elementos que caem da extremidade esquerda reaparecem na extremidade direita.

Int d -> gira a matriz muitos passos para a esquedar

Ex: 
  d = 2
  arr = [1, 2, 3, 4, 5]

  retornamos depois de 2 rotacoes: arr = [3, 4, 5, 1, 2]

  d -> quantidade a ser girada
  arr[n] -> a matriz a ser girada

*/



function rotateLeft(d, arr) {
  
  for(let i = 0; i < d; i++) arr.push(arr.shift());

  return arr;
}


// Other way
function rorateLeft2(){
  d = d % arr.length;  
  return arr.slice(d).concat(arr.slice(0, d));
}


const d = 2;
const arr = [1, 2, 3, 4, 5];

rotateLeft(d, arr);