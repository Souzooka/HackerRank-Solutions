/*
    Compare two Linked Lists A and B
    Return 1 if they are identical and 0 if they are not.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function compareLinkedLists( headA, headB) {

  let listA = [];
  let listB = [];
  let curr = headA;

  while (curr) {
    listA.push(curr.data);
    curr = curr.next;
  }

  curr = headB;

  while (curr) {
    listB.push(curr.data);
    curr = curr.next;
  }

  if (listA.length !== listB.length) {
    return 0;
  }

  // Compare the two arrays and log the result
  return listA.every((v, i) => { return v === listB[i]; }) ? 1 : 0;

}
