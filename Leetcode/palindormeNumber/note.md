# Palindrome Number
  x é um número inteiro.
  Verificaremos se x é um PALÍNDROMO.
  
  ***OBS: Palíndromo = números que são iguais de trás para frente e de frente para trás.***
  - Exemplos:
    ```
     121
     11
    ```
    - Números negativos não são palíndromos como por exemplo: (-121) não é um palíndromo.
    - Devemos criar uma função para descobrir se x é um palíndromo. Se sim,
    ***return true*** ; caso contrário, ***return false***.


## Principal ideia para resolução
  ```
  const palindromeNumber = (x) =>{
    let numberStr = x.toString();
    let reverseNumberStr = '';

    for(let i = numberStr.length - 1; i >= 0; i--){
      reverseNumberStr += numberStr[i];
    }

    if(numberStr == reverseNumberStr){
      return true;
    }

    return false;
  } 
  ```
  - Esta função `palindromeNumber` verifica se um número inteiro `x` é um palíndromo. Primeiro, converte o número para uma string usando `toString()`, permitindo manipulação de caracteres. Em seguida, itera sobre a string reversa, construindo `reverseNumberStr`. Se a string original e a string reversa forem iguais, retorna `true`, indicando que o número é um palíndromo; caso contrário, retorna `false`.
