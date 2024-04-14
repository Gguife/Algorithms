/*
  x é um número inteiro.
  Verificaremos se x é um PALÍNDROMO.
  Palíndromo = números que são iguais de trás para frente e de frente para trás.
  Exemplos:
    121
    11
    
  Números negativos não são palíndromos. Exemplo: (-121) não é um palíndromo.

  Devemos criar uma função para descobrir se x é um palíndromo. Se sim, retornar true; caso contrário, retornar false.
*/


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
