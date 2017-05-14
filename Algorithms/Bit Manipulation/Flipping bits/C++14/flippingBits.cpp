#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <limits.h>
using namespace std;

int main() {
  uint32_t cases;
  cin >> cases;

  for (uint32_t i = 0; i < cases; ++i)
  {
    uint32_t input;
    cin >> input;
    input ^= UINT_MAX;
    cout << input << endl;
  }
  return 0;
}
