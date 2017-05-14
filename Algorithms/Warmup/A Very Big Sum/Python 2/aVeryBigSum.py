#!/bin/python

import sys


n = int(raw_input().strip())
arr = map(int,raw_input().strip().split(' '))

def bigSumRecursive(arr):
  if (len(arr) <= 1):
    return arr[0]
  return arr[len(arr)-1] + bigSumRecursive(arr[:len(arr)-1])

print (bigSumRecursive(arr))