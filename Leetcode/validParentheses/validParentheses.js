const isValid = (s) => {
  const stack = [];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for(let char of s){
    if(pairs[char]){
      stack.push(char);
    }else{
      const lastOpening = stack.pop();
      if(pairs[lastOpening] !== char){
        return false;
      }
    }
  }
  
  return stack.length === 0;
}