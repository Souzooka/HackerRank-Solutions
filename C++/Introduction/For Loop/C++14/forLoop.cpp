#include <iostream>
#include <cstdio>
using namespace std;

int main() {
  int low;
  int high;
  cin >> low >> high;
  
  for (int i = low; i <= high; ++i)
  {
    if (i == 1)
    {
      printf("one\r\n");
    }
    else if (i == 2)
    {
      printf("two\r\n");
    }
    else if (i == 3)
    {
      printf("three\r\n");
    }
    else if (i == 4)
    {
      printf("four\r\n");
    }
    else if (i == 5)
    {
      printf("five\r\n");
    }
    else if (i == 6)
    {
      printf("six\r\n");
    }
    else if (i == 7)
    {
      printf("seven\r\n");
    }
    else if (i == 8)
    {
      printf("eight\r\n");
    }
    else if (i == 9)
    {
      printf("nine\r\n");
    }
    else if (i > 9)
    {
      if (i & 1)
      {
        printf("odd\r\n");
      }
      else
      {
        printf("even\r\n");
      }
    }
  }
  
  return 0;
}

