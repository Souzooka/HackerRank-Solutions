#include <iostream>
#include <cstdio>
#include <algorithm>
using namespace std;

int max_of_four(int a = 0, int b = 0, int c = 0, int d = 0)
{
  int largest = 0;
  int nums[4] = {a, b, c, d};
  for (int i = 0; i < 4; ++i)
  {
    if (nums[i] > largest)
    {
      largest = nums[i];
    }
  }
  return largest;
}

int main() {
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);
    
    return 0;
}


