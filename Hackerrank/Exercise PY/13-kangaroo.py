def kangaroo(x1, v1, x2, v2):
  if(v1 <= v2 and x1 != x2):
    print('NO');

  if((x2 - x1) % (v2 - v1) == 0):
    print('Yes')
  else:
    print('NO')


x1 = 0;
v1 = 3;
x2 = 4;
v2 = 2;
kangaroo(x1, v1, x2, v2)