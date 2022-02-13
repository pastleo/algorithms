import unittest

import algorithms.algorithms as alg

class TestAlgorithms(unittest.TestCase):
    # method names beginning with test will be treated as a test case
    # assert API: https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertEqual

    def test_findDuplicate(self):
        self.assertEqual(alg.findDuplicate([1,3,4,2,2]), 2)
        self.assertEqual(alg.findDuplicate([3,1,3,4,2]), 3)

    def test_find_cycle_start(self):
        Node = alg.Node

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
        self.assertEqual(alg.find_cycle_start(head).value, 3)

        head.next.next.next.next.next.next = head.next.next.next
        # 1 -> 2 -> 3 -> 4 -> 5 -> 6
        #                ^         |
        #                +---------+
        self.assertEqual(alg.find_cycle_start(head).value, 4)

        head.next.next.next.next.next.next = head
        # 1 -> 2 -> 3 -> 4 -> 5 -> 6
        # ^                        |
        # +------------------------+
        self.assertEqual(alg.find_cycle_start(head).value, 1)

        head.next.next.next.next.next.next = Node(7)
        # 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> None
        self.assertEqual(alg.find_cycle_start(head), None)

if __name__ == '__main__':
    unittest.main()
