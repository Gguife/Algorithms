// Soma de grandes números
// Recebemos um ar com 5 grandes números e devemos retornar a soma entre todos eles
// ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
// return = 5000000015

function VeryBigSum(ar) {
  let sum = 0;
  for(let i = 0; i < ar.length; i++){
    sum += ar[i]
  }
  
  return sum;
}

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const result = VeryBigSum(ar);
console.log(result);