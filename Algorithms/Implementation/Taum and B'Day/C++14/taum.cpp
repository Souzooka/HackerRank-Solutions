#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <inttypes.h>
using namespace std;

int main() {
  int t;
  cin >> t;
  for (int i = 0; i < t; i++)
  {
    uint64_t b;
    uint64_t w;
    cin >> b >> w;
    uint64_t x;
    uint64_t y;
    uint64_t z;
    cin >> x >> y >> z;
    uint64_t result;

    if (z >= x && z >= y)
    {
      result = (b * x) + (w * y);
    }
    else if (x > (z + y))
    {
      result = ((y + z) * b) + (y * w);
    }
    else if (y > (z + x))
    {
      result = ((x + z) * w) + (x * b);
    } else
    {
      result = (x * b) + (y * w);
    }
    printf("%" PRIu64 "\r\n", result);
  }
  return 0;
}
