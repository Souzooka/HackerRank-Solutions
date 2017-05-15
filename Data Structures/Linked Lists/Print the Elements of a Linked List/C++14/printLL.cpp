/*
  Print elements of a linked list on console 
  head pointer input could be NULL as well for empty list
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
using namespace std;

void Print(Node *head)
{
  Node *curr = head;
  
  while (curr != nullptr)
  {
    cout << curr->data << endl;
    curr = curr->next;
  }
}
