/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Examples:
A)
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.
B)
  Input: l1 = [0], l2 = [0]
  Output: [0]
C)
  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]

Constraints:
  The number of nodes in each linked list is in the range [1, 100].
  0 <= Node.val <= 9
  It is guaranteed that the list represents a number that does not have leading zeros
*/

// var addTwoNumbers = function (l1, l2) {
//   function ConvertReverseListNodeToArray(listNode) {
//       let returnedArray = [];
//       if (listNode.next != null) {
//           returnedArray = returnedArray.concat(
//               ConvertReverseListNodeToArray(listNode.next)
//           );
//       }
//       returnedArray.push(listNode.val);
//       return returnedArray;
//   }
//   const l1Array = ConvertReverseListNodeToArray(l1);
//   const l2Array = ConvertReverseListNodeToArray(l2);
//   let newTotal = BigInt(l1Array.join('')) + BigInt(l2Array.join(''));
//   splitNewTotal = newTotal.toString().split('');
//   let returnedListNode = null;
//   for (let i = 0; i < splitNewTotal.length; i++) {
//       returnedListNode = {
//           val: splitNewTotal[i],
//           next: returnedListNode,
//       };
//   }
//   return returnedListNode;
// };

var addTwoNumbers = function(l1, l2) {
  //initalize the node as null in cases where no values are added
  let node = null;
  //in cases where sum is > 10
  const carry = arguments[2] ? 1 : 0;
  //there are node values existent that need to be added
  if (l1 || l2) {
    //obtain values of current l1 and l2 nodes, 0 if non-existent
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    //obtain the .next values of current l1 and l2 nodes, null if non-existent
    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;
    //sum together the numbers and optionally the carry
    const sum = val1 + val2 + Number(carry);
    //returning node is the sum, with removal of any potential carry
    node = new ListNode(sum % 10);
    //the returning node's .next value to be the sum of adding the next two nodes together, + the current carry (if one exists)
    node.next = addTwoNumbers(next1, next2, sum >= 10);
  //carry was passed in but no values exist to be added -> return a node with the carry value in it, and no .next
  } else if (carry) {
    node = new ListNode(1);
    node.next(null);
  }
  return node;
}