/*
Uma pessoa quer determinar o teclado de computador e a unidade USB mais caros que podem ser comprados com um determinado orçamento. 
Dadas as listas de preços para teclados e unidades USB e um orçamento, encontre o custo para comprá-los. Se não for possível comprar os dois itens, devolva -1.

exemplo: 
  b = 60
  keybords = [40, 50, 60]
  drivers = [5, 8, 12] 


Deve retornar o maior valor possivel na compra, neste caso, deve retornar 58;
Caso nao seja possivel realizar a compra, devemos retornar -1;
*/


function eletronicsShop(b, keybords, drivers) {
  let maxSpent = -1;
  
  for(let i = 0; i < keybords.length; i++) {
    for(let j = 0; j < drivers.length; j++) {

      let totalCost = keybords[i] + drivers[j];
      
      if(totalCost <= b) {
        maxSpent = Math.max(maxSpent, totalCost);
      }

    }
  }  


  return maxSpent;
}



const b = 60;
const keybords = [40, 50, 60];
const drivers = [5, 8, 12];

const result = eletronicsShop(b, keybords, drivers);
console.log(result);