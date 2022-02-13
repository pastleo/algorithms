export function sum(a, b) {
  return a + b;
}

// run directly during development:
if (typeof testing === 'undefined') {
  console.log('running sum');
  console.log('sum(1,2):', sum(1,2));
}

/**
 * node of singly-linked list.
 * @typedef {{ val: number, next: ListNode }} ListNode
 */

/**
 * @param {ListNode} head
 * @param {number} n
 */
export function removeNthFromEnd(head, n) {
  var arr = [head];
  var cur = head;
  while(cur.next) {
    cur = cur.next
    arr.push(cur)
  }

  if (n === arr.length) {
    return head.next;
  } else {
    var nodeToRm = arr[arr.length - n - 1];
    nodeToRm.next = nodeToRm.next.next
    return head;
  }
};

export function reverseList(head) {
  if (!head) { return head; }
  var reversed = { val: head.val, next: null };
  var cur = head;
  while(cur.next) {
    cur = cur.next;
    reversed = { val: cur.val, next: reversed };
  }
  return reversed;
};
var reverseListRecursive = function(head, reversed) {
  if (!head) { return head; }
  if (head.next) {
    return reverseListRecursive(head.next, { val: head.val, next: reversed || null });
  } else {
    return { val: head.val, next: reversed };
  }
};

export function mergeTwoLists(l1, l2) {
  if (!l1) { return l2; }
  if (!l2) { return l1; }
  var mergedHead, l1c, l2c;
  if (l1.val > l2.val) {
    mergedHead = l2;
    l1c = l1;
    l2c = l2.next;
  } else {
    mergedHead = l1;
    l1c = l1.next;
    l2c = l2;
  }
  var merged = mergedHead;
  while(l1c && l2c) {
    if (l1c.val > l2c.val) {
      merged.next = l2c;
      l2c = l2c.next;
    } else {
      merged.next = l1c;
      l1c = l1c.next;
    }
    merged = merged.next;
  }
  
  if (l1c) {
    merged.next = l1c
  }
  if (l2c) {
    merged.next = l2c
  }

  return mergedHead;
};


export function isPalindrome(head) {
  if(!head || !head.next) { return true; }
  if(!head.next.next) { return head.val == head.next.val; }
  var p1 = head.next, p2 = head.next.next, p3 = head.next.next, pt, odd = true;
  head.next.next = head;
  head.next = null;
  if(p3.next) { p3 = p3.next; odd = false; }
  while(p3.next) {
    pt = p2;
    p2 = p2.next;
    pt.next = p1;
    p1 = pt;
    p3 = p3.next;
    if(p3.next) {
      p3 = p3.next;
      odd = false;
    } else {
      odd = true;
    }
  }

  if (odd) {
    p1 = p1.next;
  }
  while(p1 && p2) {
    if (p1.val != p2.val) { return false; }
    p1 = p1.next;
    p2 = p2.next;
  }
  return true;
};

export function hasCycle(head) {
  if (!head) { return false; }
  var next, cur = head, visitedNext = {};
  while (cur.next) {
    if (cur.next === visitedNext) { return true; }
    next = cur.next;
    cur.next = visitedNext;
    cur = next;
  }
  return false;
};

var allPossibleFBTCache = {
  1: [{val: 0, left: null, right: null}],
  3: [{val: 0, left: {val: 0, left: null, right: null}, right: {val: 0, left: null, right: null}}]
}
var allPossibleFBT = function(N) {
  if (N % 2 === 0) return [];
  if (allPossibleFBTCache[N]) return allPossibleFBTCache[N];

  var results = [];
  for(var i = 1; i <= N - 1; i += 2) {
    var lefts = allPossibleFBT(i);
    var rights = allPossibleFBT(N - 1 - i);
    for(var l of lefts) {
      for(var r of rights) {
        results.push({val: 0, left: l, right: r})
      }
    }
  }

  allPossibleFBTCache[N] = results;
  return results;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
export function isValidSudoku(board) {
  var col_sets = (new Array(9)).fill().map(() => ({}));
  var blk_sets = (new Array(9)).fill().map(() => ({}));

  for(var i = 0; i < 9; i++) {
    var row_set = {};
    for(var j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      if (row_set[board[i][j]]) return false;
      if (col_sets[j][board[i][j]]) return false;
      var blk_key = Math.floor(j/3) + Math.floor(i/3) * 3;
      if (blk_sets[blk_key][board[i][j]]) return false;
      row_set[board[i][j]] = true;
      col_sets[j][board[i][j]] = true;
      blk_sets[blk_key][board[i][j]] = true;
    }
  }
  return true;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export function sortedArrayToBST(nums) {
  return sortedArrayToBSTRecursive(nums, 0, nums.length - 1);
};
function sortedArrayToBSTRecursive(nums, left, right) {
  if (left > right) {
    return null;
  }
  if (left === right) { return {val: nums[left], right: null, left: null}; }
  var mid = Math.floor((right + left) / 2);
  return {
    val: nums[mid],
    left: sortedArrayToBSTRecursive(nums, left, mid - 1),
    right: sortedArrayToBSTRecursive(nums, mid + 1, right),
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob_recur_cache;
export function rob(nums) {
  if (nums.length === 0) return 0;
  rob_recur_cache = {
    0: nums[0],
    1: nums[1] > nums[0] ? nums[1] : nums[0],
  }
  return rob_recur(nums, nums.length - 1);
};
function rob_recur(nums, n) {
  if (rob_recur_cache[n] !== undefined) return rob_recur_cache[n];
  var useSelf = rob_recur(nums, n - 2) + nums[n];
  var dontUseSelf = rob_recur(nums, n - 1);
  var bestValue = useSelf > dontUseSelf ? useSelf : dontUseSelf;
  rob_recur_cache[n] = bestValue;
  return bestValue;
}

/**
 * @param {string} s
 * @return {number}
 */
var romanValueMapping = {
  CM: 900,
  CD: 400,
  M: 1000,
  D: 500,
  XC: 90,
  XL: 40,
  C: 100,
  L: 50,
  IX: 9,
  IV: 4,
  X: 10,
  V: 5,
  I: 1,
}
export function romanToInt(s) {
  return s
    .match(/(CM|CD|M|D|XC|XL|C|L|IX|IV|X|V|I)/g)
    .map(x => romanValueMapping[x])
    .reduce((a, b) => (a + b), 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export function missingNumber(nums) {
  return (nums.length * (nums.length + 1) / 2) - nums.reduce((a, b) => (a + b), 0);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export function isSymmetric(root) {
  if (!root) return true;
  return isSymmetricRecur(root.left, root.right);
};
function isSymmetricRecur(left, right) {
  if (left === null) { return !right; }
  if (right === null) { return !left; }
  if (left.val !== right.val) { return false; }
  return (
    isSymmetricRecur(left.right, right.left) &&
    isSymmetricRecur(left.left, right.right)
  );
}
