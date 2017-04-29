#!/bin/python

import sys


arr = []
for arr_i in xrange(6):
    arr_temp = map(int,raw_input().strip().split(' '))
    arr.append(arr_temp)

max = None
for i in range(len(arr) - 2):
  for j in range(len(arr) - 2):
    sum = 0

    #top of hourglass
    sum += arr[i][j]
    sum += arr[i][j+1]
    sum += arr[i][j+2]

    #middle of hourglass
    sum += arr[i+1][j+1]

    #bottom of hourglass
    sum += arr[i+2][j]
    sum += arr[i+2][j+1]
    sum += arr[i+2][j+2]

    if sum > max or max == None:
      max = sum

print max