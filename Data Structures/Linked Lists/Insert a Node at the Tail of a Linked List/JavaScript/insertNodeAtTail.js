/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {

  if (!head) {
    head = {};
    head.data = data;
    head.next = null;
    return head;
  }

  let curr = head;

  //traverse the list
  //when next is null we know we're at the end of the list
  while (curr.next !== null) {
    curr = curr.next;
  }

  //Add the next node
  curr.next = {
    data: data,
    next: null
  };

  return head;
}
