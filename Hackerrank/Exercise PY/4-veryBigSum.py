# Soma de grandes números
# Recebemos um ar com 5 grandes números e devemos retornar a soma entre todos eles
# ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
# return = 5000000015

def VeryBigSum(ar):
  sum = 0;

  for num in ar:
    sum += num;

  return sum

ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
result = VeryBigSum(ar);
print(result);