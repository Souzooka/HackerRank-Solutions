/*
    Get Nth element data from the end in a Linked List
    Number of elements in the list will always be greater than N.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function getNodeValue( head, position) {
  
  // Go through the linked and find its length
  let curr = head;
  let length = 1;
  
  while (curr.next) {
    curr = curr.next;
    ++length;
  }
  
  // Change position so it's based off the head instead of the tail
  position = Math.abs(length - 1 - position)
  
  curr = head;
  
  // Iterate through the list until we get the current node
  while (position--) {
    curr = curr.next;
  }
  
  return curr.data;
    
}

