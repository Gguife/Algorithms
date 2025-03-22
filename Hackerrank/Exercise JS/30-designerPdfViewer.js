/*
Existe uma lista de 26 alturas de caracteres alinhadas por índice às suas letras. 
Por exemplo, 'a' está no índice 0 e 'z' está no índice 25. 

Usando as alturas das letras fornecidas, determine a área do retângulo destacado em mm2.
assumindo que todas as letras sao 1mm largo.


Descricao da funcao:
  int h[26]: as alturas de cada letra
  word string: uma string

Devolucao:
  int: o tamanho da area destacada



Formato de entrada
  A primeira linha contem 26 inteiros separados por espacos descrevendo as respectivas
  alturas de cada letra minusculas inglesas consecutiva, ascii[az].
  A segunda linha contem uma unica palavra consistindo de letras e minusuclas de 
  alfabeto ingles.


Restricoes
  1 <= h[?] <= 7
  word nao contem mais que 10 cartas
*/




function designerPdfViewer(h, word) {
  const newWords = word.split('');
  const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  const alphabetLowercase = alphabet.map(word => word.toLowerCase());
  const newArr = [];

  
  for(let i = 0; i < newWords.length; i++) {
    let index = alphabetLowercase.indexOf(newWords[i]);
    newArr.push(h[index]);
  } 
  
  const maxValue = Math.max(...newArr);

  return maxValue * newWords.length;
}

const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const word = 'abc';
const result = designerPdfViewer(h, word);
console.log(result);




function designerBetterCode() {
  let maxHeight = 0;

  for(const char of word){
    const index = char.charCodeAt(0) - 97;
    maxHeight = Math.max(maxHeight, h[index]);
  }

  return maxHeight * word.length;
}