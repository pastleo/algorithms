#include <iostream>
#include <vector>
#include <utility>

using namespace std;

// https://www.educative.io/courses/grokking-the-coding-interview/7D5NNZWQ8Wr
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

// https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP
int findMaxSumSubArrayOfSizeK(int K, const vector<int>& arr) {
  int maxSum = 0;
  int sum = 0;

  for(int i = 0; i < K; i++) {
    sum += arr[i];
  }
  maxSum = sum;
  for(int i = K; i < arr.size(); i++) {
    sum += arr[i];
    sum -= arr[i - K];
    if (sum > maxSum) maxSum = sum;
  }

  return maxSum;
}

// https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP
pair<int, int> searchPairWithTargetSum(const vector<int>& arr, int targetSum) {
  int pointerFront = 0;
  int pointerBack = arr.size() - 1;
  int currentSum;

  while (pointerBack > pointerFront) {
    currentSum = arr[pointerFront] + arr[pointerBack];

    if (targetSum > currentSum) {
      pointerFront++;
    } else if (targetSum < currentSum) {
      pointerBack--;
    } else {
      return make_pair(pointerFront, pointerBack);
    }
  }

  return make_pair(-1, -1);
}

// https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
int removeDuplicates(const vector<int>& arr) {
  if (arr.size() <= 0) return 0;
  int length = 1;
  for(int i = 1; i < arr.size(); i++) {
    if (arr[i] != arr[i - 1]) length++;
  }
  return length;
}

class ListNode {
  public:
    int value;
    ListNode* next;

    ListNode(int value) {
      this->value = value;
      this->next = nullptr;
    }
};

// https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D
bool linkedListHasCycle(ListNode* head) {
  ListNode* tortoise = head;
  ListNode* hare = head;

  while (hare != nullptr && hare->next != nullptr) {
    hare = hare->next->next;
    tortoise = tortoise->next;

    if (hare == tortoise) return true;
  }
  return false;
}

class LinkedListCycleLength {
  public:
    static int findCycleLength(ListNode* head) {
      ListNode* tortoise = head;
      ListNode* hare = head;

      while (hare != nullptr && hare->next != nullptr) {
        hare = hare->next->next;
        tortoise = tortoise->next;

        if (hare == tortoise) return cycleLength(hare);
      }
      return -1;
    }

  private:
    static int cycleLength(ListNode* head) {
      ListNode* current = head;
      int length = 0;
      do {
        current = current->next;
        length++;
      } while (current != head);
      return length;
    }
};

// https://leetcode.com/problems/find-the-duplicate-number/
int findDuplicate(const vector<int>& nums) {
  // Find the intersection point of the two runners.
  int tortoise = nums[0];
  int hare = nums[0];

  do {
    //printf("tortoise: %d -> %d, ", tortoise, nums[tortoise]);
    //printf("hare: %d -> %d -> %d\n", hare, nums[hare], nums[nums[hare]]);
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise != hare);

  //printf("meet at %d\n", hare);

  // Find the "entrance" to the cycle.
  tortoise = nums[0];
  while (tortoise != hare) {
    //printf("tortoise: %d -> %d, ", tortoise, nums[tortoise]);
    //printf("hare: %d -> %d\n", hare, nums[hare]);
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return hare;
}

#ifndef TEST
int main() {
  /*
  printf("running findAverageOfSubarrayOfSizeK, result:\n");
  vector<int> input { 1, 3, 2, 6, -1, 4, 1, 8, 2 };
  auto result = findAverageOfSubarrayOfSizeK(5, input);
  for (double r : result) printf("%.2f ", r);

  printf("running pairWithTargetSum, result:\n");
  auto result = searchPairWithTargetSum(vector<int> { 1, 2, 3, 4, 6 }, 6);
  printf("[%d, %d]", result.first, result.second);
  */

  printf("running findDuplicate, result:\n");
  printf("case 1: %d\n", findDuplicate(vector<int> { 3, 1, 4, 2, 2 }));
  printf("case 2: %d\n", findDuplicate(vector<int> { 1, 2, 3, 4, 4 }));

  printf("\n");
  return 0;
}
#endif
