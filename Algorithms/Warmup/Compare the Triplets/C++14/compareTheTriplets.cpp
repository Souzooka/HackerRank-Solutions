#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
  int a[3];
  int b[3];
  cin >> a[0] >> a[1] >> a[2] >> b[0] >> b[1] >> b[2];
  int aScore = 0;
  int bScore = 0;
  
  for (int i = 0; i < 3; ++i)
  {
    if (a[i] > b[i])
    {
      ++aScore;
    }
    else if (b[i] > a[i])
    {
      ++bScore;
    }
  }
  printf("%d %d", aScore, bScore);
  return 0;
}
