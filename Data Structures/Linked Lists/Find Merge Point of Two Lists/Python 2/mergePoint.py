"""
 Find the node at which both lists merge and return the data of that node.
 head could be None as well for empty list
 Node is defined as
 
 class Node(object):
 
   def __init__(self, data=None, next_node=None):
       self.data = data
       self.next = next_node

 
"""

def FindMergeNode(headA, headB):
  stack = []
  currA = headA
  currB = headB
  while (currA):
    stack.append(currA)
    currA = currA.next
    
  while (currB):
    if stack.count(currB) == 1:
      return currB.data
    currB = currB.next
  
  
  
  
  
  
  
  
  
  

