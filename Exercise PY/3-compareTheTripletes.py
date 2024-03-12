# Jogo entre Bob e Alice 
# Nest jogo comparamos o arr de cada um, aquele que tiver um indice maior acrecentamos um ponto.
# A comparação seria da seguinte forma:
#   - a[0]>b[0] -> Ponto para alice
#   - a[1]<b[1] -> Ponto para bob
#   - a[2]=b[2] -> nao computamos pontos
#  Exemplo:
# a = [1, 2, 3]
# b = [3, 2, 1]
# resposta = [1,1]


def compareTheTriplete(a, b):
  aliceScore = 0;
  bobScore = 0;
  for alice, bob in zip(a, b):
    if alice > bob: aliceScore += 1;
    if alice < bob: bobScore += 1;

  return [aliceScore, bobScore];

a = [1, 2, 3]
b = [3, 2, 1]
result = compareTheTriplete(a, b);
print(result);


#ZIP combina elementos de várias sequências