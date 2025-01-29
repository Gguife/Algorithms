/**
  Usando o diagrama acima, se o aluno quiser ir para a página 3, eles abrem o livro na página 1, virarpágina e eles estão na página correta. 
  Se eles abrirem o livro na última página 5, página, eles viram 1 página e estão na página correta. Retornar 1.

  Descrição da função
  pageCount tem o(s) seguinte(s) parâmetro(s):

  int n : o número de páginas do livro
  int p : o número da página para virar

  Devoluções

  int: o número mínimo de páginas para virar
*/



function drawingBooks(n, p) {

  let front = Math.floor(p/2);
  let back = Math.floor(n/2 - front);


  return Math.min(front, back);
}

const result = drawingBooks(5, 4);
console.log(result); 