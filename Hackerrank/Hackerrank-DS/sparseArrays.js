/*
Temos uma colecao de strings de entrada e de consulta.
Para cada string de consulta, determine quantas vezes ela ocorren na lista de strings de entrada.
Retornamos uma matriz dos resultados.

Ex:
stringList = ['ab', 'ab', 'abc']
queries = ['ab', 'abc', 'bc']

output = [2, 1, 0]

Descricao:
stringList[n] = uma matriz de strings para pesquisar
queries[q] = uma matriz de strings de consulta

saida:
int[q] = os resultados de cada consulta
*/


function matchingStrings(stringList, queries) {
  let resultQueries = [];

  for(let i = 0; i < queries.length; i++){
    let sum = 0;
    for(let j = 0; j < stringList.length; j++){
      if(queries[i] === stringList[j]) {
        sum = sum + 1;
      }
    }
    resultQueries.push(sum);
  }


  return resultQueries;
}



const stringList = ['ab', 'ab', 'abc'];
const queries = ['ab', 'abc', 'bc'];
const result = matchingStrings(stringList, queries);

console.log(result);