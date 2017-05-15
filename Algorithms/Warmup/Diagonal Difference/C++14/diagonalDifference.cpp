#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
  int size;
  cin >> size;
  int matrix[size][size];
  int fDSum = 0;
  int rDSum = 0;
  
  // Initialize matrix
  for (int i = 0; i < size; ++i)
  {
    for (int j = 0; j < size; ++j)
    {
      cin >> matrix[i][j];
    }
  }
  
  // Sum diagonals
  for (int i = 0; i < size; ++i)
  {
    for (int j = 0; j < size; ++j)
    {
      if (i == j)
      {
        fDSum += matrix[i][j];
      }
      if (i + j == size - 1)
      {
        rDSum += matrix[i][j];
      }
    }
  }
  
  cout << abs(fDSum - rDSum);
  return 0;
}
