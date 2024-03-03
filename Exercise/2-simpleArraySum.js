// arr = [1,2,3] -> Find the sum of its elements (1+2+3)
// return 6


function simpleArraySum(ar){
  let sum = 0;
  for(let i = 0; i < ar.length; i++){
    sum += ar[i];
  }
  
  return sum;
}

const arr = [3,2,3];
const result = simpleArraySum(arr);
console.log(result);
