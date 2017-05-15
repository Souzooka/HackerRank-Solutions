#!/bin/python

import sys


n = int(raw_input().strip())
arr = map(int,raw_input().strip().split(' '))
positives = 0
negatives = 0
zeroes = 0

for i in range (len(arr)):
  if arr[i] == 0:
    zeroes += 1
    continue
  if arr[i] > 0:
    positives += 1
    continue
  if arr[i] < 0:
    negatives += 1
    continue

print (positives / float(n))
print (negatives / float(n))
print (zeroes / float(n)) 