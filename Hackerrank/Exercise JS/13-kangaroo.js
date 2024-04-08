/*
X1 e X2 são posições inciais dos cangurus
V1 e V2 são as distâncias percorridas pelo salto do canguru

Se em algum momento os dois cangurus se encontrarem, retorne YES
Caso nao se encontrem retorne NO

exemplo:
entradas 0 3 4 2
retorna YES
por que se econtram na distancia de 12 metros, eles tem que esta pulando juntos, ou seja, dividindo a mesma casa ao mesmo tempo

1 -> 0, 3, 6, 9, 12
2 -> 4, 6, 8, 10, 12

*/


function kangaroo (x1, v1, x2, v2){ 
  // Se a velocidade do primeiro canguru for menor ou igual à velocidade do segundo canguru
  // e ambos estiverem em posições diferentes, não é possível alcançá-los ao mesmo tempo.
  if (v1 <= v2 && x1 !== x2) {
    return "NO";
  }
  // Se a diferença entre as posições iniciais dos cangurus for divisível pela diferença de velocidades
  // então eles alcançarão a mesma posição ao mesmo tempo.
  if ((x2 - x1) % (v2 - v1) === 0) {
    return "YES";
  } else {
      return "NO";
  }

}

const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;
kangaroo(x1, v1, x2, v2)