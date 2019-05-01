function sum(a, b) {
  return a + b;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
window.deleteNode = deleteNode;

var removeNthFromEnd = function(head, n) {
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
window.removeNthFromEnd = removeNthFromEnd;

var reverseList = function(head) {
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
window.reverseList = reverseList;

var mergeTwoLists = function(l1, l2) {
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

window.mergeTwoLists = mergeTwoLists

var isPalindrome = function(head) {
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
window.isPalindrome = isPalindrome

var hasCycle = function(head) {
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
window.hasCycle = hasCycle

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
var isValidSudoku = function(board) {
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
window.isValidSudoku = isValidSudoku;
