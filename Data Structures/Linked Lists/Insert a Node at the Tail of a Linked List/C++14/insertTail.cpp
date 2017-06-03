/*
  Insert Node at the end of a linked list
  head pointer input could be NULL as well for empty list
  Node is defined as
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
Node* Insert(Node *head,int data)
{
  Node* n = new Node();
  n->data = data;
  n->next = nullptr;
  Node* curr = head;
  if (head == nullptr) return n;

  while (curr-> next != nullptr) curr = curr->next;
  curr->next = n;
  return head;
}
