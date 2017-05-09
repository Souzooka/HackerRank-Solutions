#!/bin/python

import sys
n = int(raw_input().strip())

def factorial(n):
  if n <= 1:
    return 1
  return factorial(n-1) * n

print (factorial(n))

