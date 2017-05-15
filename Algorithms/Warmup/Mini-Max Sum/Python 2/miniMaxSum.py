#!/bin/python

import sys

arr = map(int, raw_input().strip().split(' '))
s = sum(arr)
print (s - max(arr)), (s - min(arr))