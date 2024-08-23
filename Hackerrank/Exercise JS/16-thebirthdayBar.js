/* 


*/

const birthday = (s, d, m) => {
  let result = 0;

  for(let i = 0; i < s.length - m; i++){
    let sum = 0;

    for(let j = 0; j < m; j++){
      sum += s[i + j];
    }

    if(sum === d){
      result++;
    }
  }

  return result;
}

const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;

birthday(s, d, m);