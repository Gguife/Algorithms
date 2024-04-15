def getTotalX(a, b):
  count = 0;

  for i in range(1, 101):
    if all(i % num == 0 for num in a): 
      if all(num % i == 0 for num in b):
        count += 1; 

  print(count);

a = [2, 6];
b = [24, 36];
getTotalX(a, b);