#include <gtest/gtest.h>
#include "../src/algorithms.cpp"

// https://google.github.io/googletest/reference/assertions.html

TEST(AverageOfSubarrayOfSizeK, BasicAssertions) {
  vector<int> input { 1, 3, 2, 6, -1, 4, 1, 8, 2 };
  vector<double> output = findAverageOfSubarrayOfSizeK(5, input);
  vector<double> expectedOutput { 2.2, 2.8, 2.4, 3.6, 2.8 };

  EXPECT_EQ(output.size(), expectedOutput.size());
  for (int i = 0; i < expectedOutput.size(); i++) {
    EXPECT_DOUBLE_EQ(output[i], expectedOutput[i]);
  }
}
