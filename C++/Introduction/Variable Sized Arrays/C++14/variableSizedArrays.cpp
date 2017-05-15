#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
  int n;
  int q;
  vector< vector<int> > v;
  scanf("%d %d", &n, &q);

  for (int i = 0; i < n; ++i)
  {
    int k;
    scanf("%d", &k);
    vector<int> arr;
    for (int j = 0; j < k; ++j)
    {
      int x;
      scanf("%d", &x);
      arr.push_back(x);
    }
    v.push_back(arr);
  }

  for (int i = 0; i < q; ++i)
  {
    int c;
    int r;
    cin >> c >> r;
    cout << v[c][r] << endl;
  }
  return 0;
}
