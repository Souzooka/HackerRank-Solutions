/*
    Detect a cycle in a Linked List.
    Note that the head may be 'null' if the list is empty.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function hasCycle(head) {
  const stack = [];
  let curr = head;
  
  if (head === null) {
    return false;
  }
  
  while (curr.next) {
    if (stack.indexOf(curr.data) !== -1) {
      return true;
    }
    stack.push(curr.data);
    curr = curr.next;
  }
  return false;
}

