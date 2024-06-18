def breakingRecords(scores):
  minGamesScore = scores[0];
  maxGamesScore = scores[0];
  resultMax = 0;
  resultMin = 0;

  for i in range(1, len(scores)):
    if(scores[i] > maxGamesScore):
      maxGamesScore = scores[i];
      resultMax += 1;
    elif(scores[i] < minGamesScore):
      minGamesScore = scores[i];
      resultMin += 1;

  result = [resultMax, resultMin];
  print(result);

scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
breakingRecords(scores);