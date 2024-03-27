/*
  Grading Students

  O estudantes tem a seguinte politica de notas:
    - O aluno recebe uma grade na faixa de 0 a 100
    - Qualquer grade menor que 40 é uma nota baixa

  O professor Sam gosta de arredondar as grades da seguinte forma:
    - Se a diferença entre a grade proxima do multiplo de 5 for menor que 3 arredonda.
    - Caso a nota for menor que 38, nenhum arrendondamento ocorre

  Exemplo:
    grade = 84 arredondar para 85 (85 - 84 é menor que 3)
    grade = 29 não arredondar (o resultado é inferior a 40)
    grade = 57 não arredondar (60 - 57 é 3 ou superior)


  notas = [73, 67, 38, 33] -> n = 4 (numeros de alunos)
*/

function gradingStudents(grades) {
  return grades.map((grade) =>{
    let diff = Math.ceil(grade / 5)*5 - grade;
      return (diff < 3 && grade >= 38) ? Math.ceil(grade / 5)*5 : grade;
  })
}



const grades = [73, 67, 38, 33];
const result = gradingStudents(grades);
console.log(result);
