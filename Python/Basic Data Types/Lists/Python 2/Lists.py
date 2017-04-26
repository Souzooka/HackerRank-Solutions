if __name__ == '__main__':
    N = int(raw_input())
    arr = []
    for x in range(N):
        command = raw_input()
        if command == "print":
            print(arr)
        elif command[:6] == "insert":
            arr.insert(int(command[7]), int(command[8:]))
        elif command[:6] == "remove":
            arr.remove(int(command[7:]))
        elif command[:6] == "append":
            arr.append(int(command[7:]))
        elif command == "sort":
            arr.sort()
        elif command == "pop":
            arr.pop()
        elif command == "reverse":
            arr.reverse()
