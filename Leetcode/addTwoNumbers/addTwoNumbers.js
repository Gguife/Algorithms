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

