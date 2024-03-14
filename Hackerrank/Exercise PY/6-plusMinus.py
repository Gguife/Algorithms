#  Dado um array de inteiros, devemos calcular as razões.
#  Os elementos do array são positivos, negativos e zero.
#  Devemos retornar o valor decimal de cada fração.

#  arr [1,1,0,-1,-1]
#  a razão entre eles seria de 2/5 para positivos
#  a razão entre eles seria de 2/5 para negativos
#  a razão entre eles seria de 1/5 para zeros

#  Devemos retornar o resultado das divisões com 6 casas decimais.


def PlusMinus(arr):
  n = len(arr);
  positiveCount = sum(1 for i in arr if i > 0);
  negativeCount = sum(1 for i in arr if i < 0);
  zeroCount = sum(1 for i in arr if i == 0);

  positiveRatio = format(positiveCount / n, '.6f');
  negativeRatio = format(negativeCount / n, '.6f');
  zeroRatio = format(zeroCount / n, '.6f');

  return [positiveRatio, negativeRatio, zeroRatio];


array = [-4, 3, -9, 0, 4, 1];
ratios = PlusMinus(array);
print(ratios);