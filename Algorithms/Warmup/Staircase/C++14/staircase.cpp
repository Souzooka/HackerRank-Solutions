#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
  int n;
  cin >> n;
  
  for (int i = 1; i <= n; ++i)
  {
    printf("%s\n", (string(n-i, ' ') + string(i, '#')).c_str());
  }
  return 0;
}
