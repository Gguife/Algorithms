/*
  Receberemos numeros inteiros
  Pegarameos o maior valor recebido no array e retornaremos quantas unidades existem desse valor
  exemplo:
    arr = [4,4,1,3]
    A "altura" máxima da vela é 4, há 2 unidades então retornaremos 2.
*/

const birthdayCakeCandles = (candles) =>{
  let maxNum = candles[0];
  let maxNumTotal = 0;
  
  for(let i = 0; i < candles.length; i++){
    if(candles[i] > maxNum ){
      maxNum = candles[i];
      maxNumTotal = 1;
    }else if(candles[i] === maxNum){
      maxNumTotal++;
    }
  }
  
  console.log(maxNumTotal);
}
const candles = [3,1,2,3];
birthdayCakeCandles(candles);