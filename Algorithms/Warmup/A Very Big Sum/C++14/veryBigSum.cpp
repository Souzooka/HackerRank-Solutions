#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <inttypes.h>
using namespace std;


int main() {
  int numCount;
  cin >> numCount;
  int64_t sum = 0;
  
  for (int i = 0; i < numCount; ++i)
  {
    int64_t a;
    cin >> a;
    sum += a;
  }
  printf("%" PRId64, sum);
  return 0;
}
