if __name__ == '__main__':
    n = int(raw_input())

    if (n & 1 or (n >= 6 and n <= 20)):
        print("Weird")
    else:
        print("Not Weird")
