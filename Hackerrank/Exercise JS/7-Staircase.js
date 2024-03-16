/*
  Criar uma escada com #
  Esta escada tem tamanho e base = n
  Temos que imprimir uma escada ao final da função, como por exemplo:
        #
      ##
      ###
    ####
    #####

  EXEMPLO:
  n = 6

       #
      ##
     ###
    ####
   #####
  ######
*/

const StairCase = (n) => {
  let height = n;
  let hashString = '';

  for(let i = 1; i <= height; i++){
    
    for(let j = 1; j <= height - i; j++){
      hashString += ' ';
    }
    for(let k = 1; k <= i; k++){
      hashString += '#';
    }
    hashString += '\n';
  } 

  return hashString;
}

const n = 10;
const result = StairCase(n);
console.log(result);


/*
  Lógica
  
  1. Recebos um valor n, o n definira o tamanho e base da nossa escada.
  2. Declaramos um variável height e hasstring, onde armazenaremos nossas strings, altura e base n.
  3. Criaremos um loop com tamanho exato de n, outro loop para adicionarmos os espaços em e outro para acrecentar as #
  4. Por fim, um quebra linha ao final do principal loop.
*/