def palindromeNumber (x):
  numberStr = str(x);
  numberReverse = '';

  for i in range(len(numberStr) -1, -1, -1):
    numberReverse += numberStr[i];

  if(numberStr == numberReverse): return print('true');

  return print('false');

x = 121;
palindromeNumber(x);