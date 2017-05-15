#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
  float positives;
  float zeroes;
  float negatives;
  int size;
  cin >> size;
  
  for (int i = 0; i < size; ++i)
  {
    int x;
    cin >> x;
    if (x == 0)
    {
      ++zeroes;
      continue;
    }
    (x > 0) ? ++positives : ++negatives;
  }
  printf("%.6f\n%.6f\n%.6f", positives / size, negatives / size, zeroes / size);
  return 0;
}
