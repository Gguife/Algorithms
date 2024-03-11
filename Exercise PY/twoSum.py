# LeetCode
# Temos que encontrar dois numeros do nosso arr que sua soma seja igual o valor o valor pedido (target)
# Objetivo é que o tempo de execuçãolinear O(n)
# Exemplo: nums = [2, 7, 11, 15] target = 9
# output = [0,1] //2+7 = 9


def twoSum (nums, target):
  map = {};
  for i in range(len(nums)):
    complement = target - nums[i];
    if complement in map:
        return [i, map[complement]]
    map[nums[i]] = i


nums = [2, 7, 11, 15];
target = 9;
result = twoSum(nums, target);
print(result);