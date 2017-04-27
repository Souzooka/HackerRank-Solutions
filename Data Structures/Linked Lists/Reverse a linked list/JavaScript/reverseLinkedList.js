/*
    Reverse a linked list and return the head
    The input list will have at least one element
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function reverseLinkedList(head) {
  let dataArr = [];
  let curr = head;

  if (!head) {
    return null;
  }

  while (curr.next !== null) {
    dataArr.push(curr.data);
    curr = curr.next;
  }
  dataArr.push(curr.data);
  dataArr.reverse();

  head = {
    data: dataArr[0],
    next: null
  };

  curr = head;

  for (let i = 1; i < dataArr.length; ++i) {
    curr.next = {
      data: dataArr[i],
      next: null
    };
    curr = curr.next;
  }

  return head;
}
