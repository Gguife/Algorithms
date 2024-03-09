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

  //Precision result
  sum = parseFloat(sum.toFixed(2));
  
  return sum;
}
// Example error
//const resultError = solveMeFisrtComplex('maça', 'banana');
//console.log(resultError); // error

// Example function
const result1 = solveMeFisrtComplex(7, 3); 
console.log(result1); // 10
const result2 = solveMeFisrtComplex(7.123, 3.456);
console.log(result2); // 10.58
