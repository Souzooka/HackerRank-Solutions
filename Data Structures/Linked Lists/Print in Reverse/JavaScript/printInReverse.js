/*
    Print elements of a linked list in reverse order as standard output
    head pointer could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function reversePrint(head) {
  let dataArr = [];
  let curr = head;

  if (!head) {
    return;
  }

  while (curr.next !== null) {
    dataArr.push(curr.data);
    curr = curr.next;
  }
  dataArr.push(curr.data);
  dataArr.reverse();

  dataArr.forEach( (v) => {
    console.log(v);
  });
}
