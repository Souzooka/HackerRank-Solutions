#!/bin/python

import sys

def solve(a0, a1, a2, b0, b1, b2):
  alice = [a0, a1, a2]
  bob = [b0, b1, b2]
  aliceScore = 0
  bobScore = 0
  for i in range(0, len(alice)):
    if alice[i] > bob[i]:
      aliceScore += 1
    elif alice[i] < bob[i]:
      bobScore += 1
  return [aliceScore, bobScore]

a0, a1, a2 = raw_input().strip().split(' ')
a0, a1, a2 = [int(a0), int(a1), int(a2)]
b0, b1, b2 = raw_input().strip().split(' ')
b0, b1, b2 = [int(b0), int(b1), int(b2)]
result = solve(a0, a1, a2, b0, b1, b2)
print " ".join(map(str, result))


