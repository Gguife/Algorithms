const bonAppetit = (bill, k, b) => {
  const totalSharedCost = bill.reduce((sum, item, index) => index != k ? sum + item : sum, 0);

  const annaShare = totalSharedCost / 2;

  if(b === annaShare){
    console.log("Bon Appetit");
  }else{  
    console.log(b - annaShare);
  }
}

const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;
bonAppetit(bill, k, b)

/*
vamos ter 3 valores
bill -> precos
k -> representa o index de do preco de que a ana nao come
b -> representa total de dinheiro que a ana contrinuiu para a conta


const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;
*/