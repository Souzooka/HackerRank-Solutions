/*
    Delete Node at a given position in a linked list
    head pointer input could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function deleteNode(head, position) {
  let index = 0;
  let curr = head;

  // delete head
  if (position === 0) {
    return head.next;
  }

  // traverse list
  while (index !== position -1) {
    ++index;
    curr = curr.next;
  }

  if (!curr.next) {
    // still undefined, who knows what could happen
  }

  let next = curr.next.next;
  curr.next = next;
  return head;
}
