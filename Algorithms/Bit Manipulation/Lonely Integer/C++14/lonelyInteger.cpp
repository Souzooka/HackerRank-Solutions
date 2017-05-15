#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
  int n;
  cin >> n;

  /* Load the first number into unique and then
     xor it against each remaining number, revealing
     the unique integer. */
  int unique;
  cin >> unique;
  while (cin >> n)
  {
    unique ^= n;
  }
  printf("%d", unique);
  return 0;
}
