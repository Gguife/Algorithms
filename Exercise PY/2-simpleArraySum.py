# arr = [1,2,3] -> Find the sum of its elements (1+2+3)
# return 6

def simpleArrSum(arr):
  sum = 0
  for i in arr:
    sum += i
  
  return sum
    


arr = [1, 2, 3]
result = simpleArrSum(arr)
print({'Array sum result is': result})
