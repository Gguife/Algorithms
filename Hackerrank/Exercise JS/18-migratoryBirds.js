const migratoryBirds = (arr) => {
  const birdCounts = {};

  for(let i = 0; i < arr.length; i++){
    const birdId = arr[i];
    birdCounts[birdId] = (birdCounts[birdId] || 0 ) + 1;
  }

  let maxCount = 0;
  let mostFrequentBird = null;

  for(const [birdId, count] of Object.entries(birdCounts)){
    if(count > maxCount || (count === maxCount && birdId < mostFrequentBird)){
      maxCount = count;
      mostFrequentBird = birdId;
    }
  }

  console.log(mostFrequentBird);
  return mostFrequentBird;
}

const arrBirds = [1,4,4,4,3,3];
migratoryBirds(arrBirds);
