/* Node is defined as
var Node = function(data) {
    this.data = data;
    this.next = null;
}
*/
// This is a "method-only" submission.
// You only need to complete this method.

function print(head) {
    let curr = head;
    if (head) {
        console.log(head.data);
        while (curr.next) {
            curr = curr.next;
            console.log(curr.data);
        }
    }

}

