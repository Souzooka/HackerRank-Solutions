def is_leap(year):
    leap = False
    
    # Write your logic here
    if (year % 4 is 0 and not (year % 100 is 0 and year % 400 is not 0)):
        leap = True
    
    return leap
