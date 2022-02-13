from __future__ import print_function

# https://leetcode.com/problems/find-the-duplicate-number/
def findDuplicate(nums: list[int]) -> int:
    tortoise = nums[nums[0]]
    hare = nums[nums[nums[0]]]

    while tortoise != hare:
        tortoise = nums[tortoise]
        hare = nums[nums[hare]]

    tortoise = nums[0]
    while tortoise != hare:
        tortoise = nums[tortoise]
        hare = nums[hare]

    return hare

class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

    def print_list(self):
        temp = self
        while temp is not None:
            print(temp.value, end='')
            temp = temp.next
        print()

# https://www.educative.io/courses/grokking-the-coding-interview/N7pvEn86YrN
def find_cycle_start(head):
    tortoise = head
    hare = head

    while hare is not None and hare.next is not None:
        # print('tortoise: %s -> %s' % (str(tortoise.value), str(tortoise.next.value)))
        # print('hare:     %s -> %s -> %s' % (str(hare.value), str(hare.next.value), str(hare.next.next.value)))
        # print('')
        tortoise = tortoise.next
        hare = hare.next.next
        if tortoise == hare:
            break

    if tortoise != hare:
        return
    # print('meet! tortoise: %s, hare: %s\n' % (str(tortoise.value), str(hare.value)))

    tortoise = head
    while tortoise != hare:
        # print('tortoise: %s -> %s' % (str(tortoise.value), str(tortoise.next.value)))
        # print('hare:     %s -> %s' % (str(hare.value), str(hare.next.value)))
        # print('')
        tortoise = tortoise.next
        hare = hare.next

    return tortoise

if __name__ == '__main__':
    print('Running main from algorithm/algorithm.py')

    head = Node(1)
    head.next = Node(2)
    head.next.next = Node(3)
    head.next.next.next = Node(4)
    head.next.next.next.next = Node(5)
    head.next.next.next.next.next = Node(6)

    head.next.next.next.next.next.next = head.next.next
    # 1 -> 2 -> 3 -> 4 -> 5 -> 6
    #           ^              |
    #           +--------------+
    print("find_cycle_start: " + str(find_cycle_start(head).value))
