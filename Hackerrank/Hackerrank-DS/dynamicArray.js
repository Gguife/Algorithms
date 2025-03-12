

function dynamicArray(n, queries) {
  const arr = Array.from({length: n}, () => []);
  let lastAnswer = 0;
  const result = [];

  for(const [q, x, y] of queries){
    const idx = (x ^ lastAnswer) % n;
    
    if(q === 1){
      arr[idx].push(y);
    }else if(q === 2){
      const value = arr[idx][y % arr[idx].length];
      lastAnswer = value;
      result.push(lastAnswer);
    }
  }


  return result;
}



let n = 2;
let queries = [
    [1, 0, 5],  
    [1, 1, 7],  
    [1, 0, 3],  
    [2, 1, 0],  
    [2, 1, 1]   
];

console.log(dynamicArray(n, queries));