if __name__ == '__main__':
    n = int(raw_input())
    newTup = ()
    integer_list = map(int, raw_input().split())
    for x in range(0, len(integer_list)):
        tup = (integer_list[x],)
        newTup = newTup + tup
    print(hash(newTup))
