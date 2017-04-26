def count_substring(string, sub_string):
    matches = 0
    for x in range(len(string)):
        if sub_string == string[x:x+len(sub_string)]:
            matches += 1
    return matches
