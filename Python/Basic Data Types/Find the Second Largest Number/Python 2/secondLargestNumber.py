if __name__ == '__main__':
    n = int(raw_input())
    arr = map(int, raw_input().split())

    secondMax = None
    firstMax = max(arr)
    for x in arr:
      if (secondMax < x < firstMax):
        secondMax = x
    print secondMax