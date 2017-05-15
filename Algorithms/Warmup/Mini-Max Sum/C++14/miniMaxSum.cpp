#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <inttypes.h>
using namespace std;


int main() 
{
  uint64_t max = 0;
  uint64_t min = UINT64_MAX;
  uint64_t sum = 0;

  for (int i = 0; i < 5; ++i)
  {
    uint64_t x;
    cin >> x;
    if (x > max) max = x;
    if (x < min) min = x;
    sum += x;
  }
  
  printf("%" PRIu64 " " "%" PRIu64, (sum - max), (sum - min));
  return 0;
}