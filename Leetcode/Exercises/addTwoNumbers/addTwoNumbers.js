/*
Você recebe duas listas vinculadas não vazias que representam dois números inteiros não negativos. 
Os dígitos são armazenados em ordem inversa e cada um de seus nós contém um único dígito. 
Adicione os dois números e retorne a soma como uma lista vinculada.

Você pode assumir que os dois números não contêm nenhum zero à esquerda, exceto o próprio número 0.

Entrada: l1 = [2,4,3], l2 = [5,6,4]
  Saída: [7,0,8]
  Explicação: 342 + 465 = 807.
*/

const addTwoNumbers = (l1, l2) =>{
  let newListNode = new ListNode(0);
  let headOfNewListNode = newListNode;

  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
      if (l1 !== null) {
          sum = sum + l1.val;
          l1 = l1.next;
      }

      if (l2 !== null) {
          sum = sum + l2.val;
          l2 = l2.next;
      }

      if (sum >= 10) {
          carry = 1;
          sum = sum - 10;
      }

      headOfNewListNode.next = new ListNode(sum);
      headOfNewListNode = headOfNewListNode.next;

      sum = carry;
      carry = 0;
  }

  return newListNode.next;
}


const l1 = [2,4,3];
const l2 = [5,6,4];
addTwoNumbers(l1, l2);

