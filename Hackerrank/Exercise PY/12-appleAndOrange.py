def appleAndOrange(s, t, a, b, apples, oranges):
  applesResult = 0;
  orangesResult = 0;

  for i in range(len(apples)):
    sumApplesUnit = apples[i] + a;
    if(sumApplesUnit >= s and sumApplesUnit <= t): applesResult += 1;

  for j in range(len(apples)):
    sumOrangesUnit = oranges[j] + b;
    if(sumOrangesUnit >= s and sumOrangesUnit <= t): orangesResult += 1;

  print(applesResult)
  print(orangesResult)




s = 7
t = 10
a = 4
b = 12
m = [2, 3 , -4]
o = [3, -2, -4]
appleAndOrange(s, t, a, b, m, o)