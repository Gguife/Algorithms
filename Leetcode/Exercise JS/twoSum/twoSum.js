/*
LeetCode
Neste exercicio temos que encontrar dois numeros do nosso arr que sua soma seja igual o valor pedido (target)
Objetivo é que o tempo de execução seja linear O(n)
Exemplo: arr = [2, 7, 11, 15] target = 9
output = [0,1] //2+7 = 9
*/

const twoSum = (arr, target) =>{
  let map = new Map();
  for(let i = 0; i < arr.length; i++){
    let complement = target - arr[i];
    if(map.has(complement)){
      return [i, map.get(complement)]
    }
    map.set(arr[i], i)
  }
};

const arr = [7, 11, 15, 2];
const target = 9;
const result = twoSum(arr, target);
console.log(result)