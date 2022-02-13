#include <gtest/gtest.h>
#include "../algorithms.cpp"

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
TEST(MaxSumSubArrayOfSizeK, BasicAssertions) {
  EXPECT_EQ(findMaxSumSubArrayOfSizeK(3, vector<int> { 2, 1, 5, 1, 3, 2 }), 9);
  EXPECT_EQ(findMaxSumSubArrayOfSizeK(2, vector<int> { 2, 3, 4, 1, 5 }), 7);
}

TEST(PairWithTargetSum, BasicAssertions) {
  pair<int, int> result1 = searchPairWithTargetSum(vector<int> { 1, 2, 3, 4, 6 }, 6);
  EXPECT_EQ(result1.first, 1);
  EXPECT_EQ(result1.second, 3);

  pair<int, int> result2 = searchPairWithTargetSum(vector<int> { 2, 5, 9, 11 }, 11);
  EXPECT_EQ(result2.first, 0);
  EXPECT_EQ(result2.second, 2);
}

TEST(RemoveDuplicates, BasicAssertions) {
  EXPECT_EQ(removeDuplicates(vector<int> { 2, 3, 3, 3, 6, 9, 9 }), 4);
  EXPECT_EQ(removeDuplicates(vector<int> { 2, 2, 2, 11 }), 2);
  EXPECT_EQ(removeDuplicates(vector<int> { 2, 2 }), 1);
  EXPECT_EQ(removeDuplicates(vector<int> { 1, 2 }), 2);
  EXPECT_EQ(removeDuplicates(vector<int> { 1 }), 1);
  EXPECT_EQ(removeDuplicates(vector<int> {}), 0);
}


TEST(LinkedListCycle, BasicAssertions) {
  ListNode* head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(3);
  head->next->next->next = new ListNode(4);
  head->next->next->next->next = new ListNode(5);
  head->next->next->next->next->next = new ListNode(6);

  EXPECT_EQ(linkedListHasCycle(head), false);

  head->next->next->next->next->next->next = head->next->next;
  EXPECT_EQ(linkedListHasCycle(head), true);

  head->next->next->next->next->next->next = head->next->next->next;
  EXPECT_EQ(linkedListHasCycle(head), true);
}

TEST(LinkedListCycleLength, BasicAssertions) {
  ListNode *head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(3);
  head->next->next->next = new ListNode(4);
  head->next->next->next->next = new ListNode(5);
  head->next->next->next->next->next = new ListNode(6);
  head->next->next->next->next->next->next = head->next->next;
  EXPECT_EQ(LinkedListCycleLength::findCycleLength(head), 4);

  head->next->next->next->next->next->next = head->next->next->next;
  EXPECT_EQ(LinkedListCycleLength::findCycleLength(head), 3);
}

TEST(FindDuplicate, BasicAssertions) {
  EXPECT_EQ(findDuplicate(vector<int> { 3, 1, 4, 2, 2 }), 2);
  EXPECT_EQ(findDuplicate(vector<int> { 1, 2, 3, 4, 4 }), 4);
}
