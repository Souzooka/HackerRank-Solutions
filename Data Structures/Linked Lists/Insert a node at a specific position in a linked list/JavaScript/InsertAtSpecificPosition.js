/*
  Insert Node at a given position in a linked list
  head can be NULL
  First element in the linked list is at position 0
  Node is defined as
  var Node = function(data) {
    this.data = data;
    this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data, position) {
  let index = 0;
  let curr = head;

  // If we're inserting at the beginning, just return the new data as a node
  if (position === 0) {
    return {
      data: data,
      next: head
    };
  }

  // Traverse dat list
  while (index !== position -1) {
    ++index;
    curr = curr.next;
  }

  if (!curr) {
    // Undefined!
  }

  // this is the tail
  if (!curr.next) {
    curr.next = {
      data: data,
      next: null
    };
    return head;
  } else {
    // insertion in middle of list
    let next = curr.next;
    curr.next = {
      data: data,
      next: next
    };
    return head;
  }
}