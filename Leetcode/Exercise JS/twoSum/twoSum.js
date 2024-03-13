/*
LeetCode
Neste exercicio temos que encontrar dois numeros do nosso arr que sua soma seja igual o valor o valor pedido (target)
Objetivo é que o tempo de execução seja linear O(n)
Exemplo: nums = [2, 7, 11, 15] target = 9
output = [0,1] //2+7 = 9
*/

const twoSum = (nums, target) =>{
  let map = new Map();
  for(let i = 0; i < nums.length; i++){
    let complement = target - nums[i];
    if(map.has(complement)){
      return [i, map.get(complement)]
    }
    map.set(nums[i], i) //Setando o número e seu index quando o if nao da certo
  }
};

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result)