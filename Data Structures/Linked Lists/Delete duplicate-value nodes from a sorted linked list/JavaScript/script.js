/*
    Remove all duplicate elements from a sorted Linked List
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function removeDuplicates(head) {
  let curr = head;
  while (curr.next) {
    if (curr.data === curr.next.data) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    } 
  }
  return head;
}

