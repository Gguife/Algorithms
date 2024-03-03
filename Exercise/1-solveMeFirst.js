// a = 7
// b = 3
// return 10

function solveMeFisrt(a, b) {
  let sum = a + b;
  return sum;
}
const result = sum(7,3);
console.log(result); // 10



//Make the code more complex
function solveMeFisrtComplex(a, b) {
  //Verify if they are numbers
  if(typeof a !== 'number' || typeof b !== 'number'){
    throw new Error("Arguments must be numbers!");
  }
  //Calculate sum
  let sum = a + b;

  //Rounding result
  sum = parseFloat(sum.toFixed());
  
  return sum;
}
// Exemplo de uso da função
const result1 = solveMeFisrtComplex(7, 3); // Sem precisão especificada
console.log(result1); // Saída: 10
const result2 = solveMeFisrtComplex(7.123, 3.456);
console.log(result2); // Saída: 10.58
