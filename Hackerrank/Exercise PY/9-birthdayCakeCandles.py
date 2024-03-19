# Receberemos numeros inteiros
# Pegarameos o maior valor recebido no array e retornaremos quantas unidades existem desse valor
# exemplo:
#   arr = [4,4,1,3]
#   A "altura" máxima da vela é 4, há 2 unidades então retornaremos 2.


def BirthdayCakeCandles(candles):
  maxNum = candles[0];
  maxNumTotal = 0;

  for i in range(len(candles)):
    if(candles[i] > maxNum): 
      maxNum = candles[i];
      maxNumTotal = 1;
    elif(candles[i] == maxNum):
      maxNumTotal += 1;
  
  print(maxNumTotal);


candles = [3,4,4,3,2,5,1,5,5,5,2,3,2];
BirthdayCakeCandles(candles);