# Mini Max Sum

# Receberemos um array de inteiros positivos e devemos encontrar o menor e o maior valor da soma entre os inteiros.
# No exemplo, devemos calcular 4 dos 5 inteiros.
# Exemplo:
# arr = [1, 3, 5, 7, 9]
# A menor soma seria: 1 + 3 + 5 + 7 = 16
# A maior soma seria: 3 + 5 + 7 + 9 = 24
# Resposta: 16 24

# O array deve conter 5 elementos inteiros.
# Retornar a resposta da soma mínima e máxima dos 4 elementos do array.


def MiniMaxSum(arr):
  miniNum = arr[0];
  maxNum = arr[0];
  totalSum = 0;

  for i in range(len(arr)):
    if(arr[i] < miniNum): miniNum = arr[i];
    if(arr[i] > maxNum): maxNum = arr[i];
    totalSum += arr[i];

  miniSum = totalSum - maxNum;
  maxSum = totalSum - miniNum;

  print(miniSum, maxSum);

arr = [5,1,3,2,4];
MiniMaxSum(arr)