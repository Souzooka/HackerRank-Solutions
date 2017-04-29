#!/bin/python

import sys


n = int(raw_input().strip())
arr = map(int,raw_input().strip().split(' '))
arr = reversed(arr)

for num in arr:
  sys.stdout.write(str(num) + ' ')
