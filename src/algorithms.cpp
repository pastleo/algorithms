#include <iostream>
#include <vector>

using namespace std;

vector<double> findAverageOfSubarrayOfSizeK(int K, const vector<int>& arr) {
  vector<double> result(arr.size() - K + 1);
  double value = 0.0;

  for(int i = 0; i < arr.size(); i++) {
    value += arr[i];

    if (i >= K - 1) {
      if (i >= K) {
        value -= arr[i - K];
      }

      result[i - K + 1] = ((double) value) / K;
    }
  }

  return result;
}

#ifndef TEST
int main() {
  printf("running findAverageOfSubarrayOfSizeK, result:\n");
  vector<int> input { 1, 3, 2, 6, -1, 4, 1, 8, 2 };
  auto result = findAverageOfSubarrayOfSizeK(5, input);
  for (double r : result) printf("%.2f ", r);

  printf("\n");
  return 0;
}
#endif
