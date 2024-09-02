/*
Uma moça criou uma máquina do tempo e deseja visitar a russia no dia do programador em um perido de 1700 até 2700.
De 1700 a 1917 o calendário oficial da russia foi o juliano; Desde 1919 eles usaram o ocalendário gregoriano.

Essa transição ocorreu em 1918, quando o dia seguinte a 31 de janeiro era 14 de fevereiro. Isso significa que em 1918, 14 de fevereiro era o 32 dia do ano na Rússia.

Em ambos os sistemas de calendário, fevereiro é o único mês com quantidade variável de dias; tem 29 dias durante um ano bissexto e 28 dias durante todos os outros anos. 
No calendário juliano, os anos bissextos são divisíveis por 4; 
no calendário gregoriano, os anos bissextos são um dos seguintes:
  Divisível por 400.
  Divisível por 4 e não divisível por 100.


Exemplo: 
Dado um ano y = 1984 ache a data de 256th dia. 1984  é divisível por 4, portanto é um ano bissexto. 
O 256º dia de um ano bissexto depois de 1918 é 12 de setembro, então a resposta é: 12.09.1984

o sistema deve retornar a respotas em formato dd.mm.yyyy



*/

const dayOfProgrammer = (year) => {
  let dayProgrammer = 256;
  let currentDay;

  if(year === 1918){
    currentDay = dayProgrammer - (31 + 15 + 31 + 30 + 31 + 30 + 31 + 31);
  }
  else if(year < 1918 && year % 4 === 0){
    currentDay = dayProgrammer - 244;
  }

  else if(year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))){
    currentDay = dayProgrammer - 244;
  }
  else{
    currentDay = dayProgrammer - 243;
  }

  const result = currentDay + ".09." + year;

  return result;
}

const year = 1984;
dayOfProgrammer(year);

/*
Verificar se ele é um ano bisexto até de 1918 -> divisivel 4;
Verificar se ele é um ano bisexto apartir de 1919 -> divisivel por 400 ou 4 e nao divisivel por 100;

somar o total de dias de cada mês 31 + 29 || 28 + 31 + 30 + 31 + 30 + 31 + 31 = 244. 
subtrair com ao dia do programador 256th -> 256 - 244 = 12;

repostar 12.09.yyyy
*/