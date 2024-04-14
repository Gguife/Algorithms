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

// OUTRAS FORMAS
var twoSum2 = function(nums, target) {

  const complimentToIndexMap = {}

  for(i=0; i < nums.length; i++) {
      const num = nums[i]
      const compliment = target - num

      if(complimentToIndexMap.hasOwnProperty(compliment)) {
          return [complimentToIndexMap[compliment], i]
      }

      complimentToIndexMap[num] = i
  }
};


var twoSum3 = function(nums, target) {
  let res;
  nums.forEach((num1, index1) => {
      nums.forEach((num2, index2) => {
          if(index1 != index2 && num1 + num2 == target) {
              res = [index1, index2];
          }
      })
  })
  return res;
};