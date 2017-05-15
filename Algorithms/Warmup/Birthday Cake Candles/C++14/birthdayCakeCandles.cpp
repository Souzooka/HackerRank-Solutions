#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
  int max, n, c = 1;
  while (cin >> n)
  {
    if (n > c) c = !!(max = n);
    if (n == max) ++c;
  }
  printf("%d", c);
  return 0;
}
