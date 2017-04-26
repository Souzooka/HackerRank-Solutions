def swap_case(s):
    charArr = []
    for char in s:
        if char.istitle():
            # if capitalized
            charArr += char.lower()
        else:
            # if not capitalized
            charArr += char.upper()
    str1 = ''.join(charArr)
    return str1
