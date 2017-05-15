#!/bin/python

import sys


n = int(raw_input().strip())
a = []
for a_i in xrange(n):
    a_temp = map(int,raw_input().strip().split(' '))
    a.append(a_temp)

fDSum = 0;
rDSum = 0;
    
for j in range(n):
  for k in range(n):
    if j == k:
      fDSum += a[j][k]
    if j + k == n-1:
      rDSum += a[j][k]

print (abs(fDSum - rDSum))