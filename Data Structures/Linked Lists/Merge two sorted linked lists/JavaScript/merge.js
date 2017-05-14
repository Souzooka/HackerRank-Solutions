/*
    Merge two sorted lists A and B as one Linked List and return the head of merged list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function mergeLinkedLists( headA, headB) {
  
  if (headA === null || headB === null) {
    return headA || headB;
  }
  
  let primaryListCurr;
  let alternateListCurr;
  let head;
  primaryListCurr = (headA.data < headB.data) ? headA : headB;
  alternateListCurr = (headA.data < headB.data) ? headB : headA;
  head = primaryListCurr;
  
  while (true) {
    if (alternateListCurr.data > primaryListCurr.data && 
        (primaryListCurr.next === null ||
        alternateListCurr.data < primaryListCurr.next.data)) {
      primaryListCurr.next = {
        data: alternateListCurr.data,
        next: primaryListCurr.next
      };
      if (alternateListCurr.next === null) {
        break;
      } else {
        alternateListCurr = alternateListCurr.next;
      }
    }
    if (primaryListCurr.data < alternateListCurr.data) {
      primaryListCurr = primaryListCurr.next;
    }
  }
  return head;
}

