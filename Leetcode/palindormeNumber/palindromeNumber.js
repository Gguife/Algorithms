const palindromeNumber = (x) =>{
  let numberStr = x.toString();
  let reverseNumberStr = '';

  //Metodo para inverter o inteiro x
  for(let i = numberStr.length - 1; i >= 0; i--){
    reverseNumberStr += numberStr[i];
  }

  if(numberStr == reverseNumberStr){
    return true;
  }

  return false;
}

const x = 10;
palindromeNumber(x);
