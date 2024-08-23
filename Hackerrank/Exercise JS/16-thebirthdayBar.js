/* 
Duas crianças querem dividir uma barra de chocolate.

- A duração do segmento corresponde ao mês de nascimento de Ron
- A soma dos números inteiros nos quadrados é igual ao dia do nascimento de lily.

Exemplo:
  s = [2, 2, 1, 3, 2];
  d = 4;
  m = 2;

  supondo que o dia seja d = 4 e o mês m = 2, haveria duas possibilidades [2,2] e [1,3]
  obs: A quantidade de seguimentos (no caso seria o mês "2") onde a soma dos números desse segmento tem que ser igual a o número do dia (dia = 4);
*/

const birthday = (s, d, m) => {
  let result = 0;

  for(let i = 0; i <= s.length - m; i++){
    let sum = 0;

    for(let j = 0; j < m; j++){
      sum += s[i + j];
    }

    if(sum === d){
      result++;
    }
  }
  console.log(result);
  return result;
}

const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;

birthday(s, d, m);