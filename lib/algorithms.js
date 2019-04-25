function sum(a, b) {
  return a + b;
}

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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if(!head) { return false; }
  if(!head.next || !head.next.next) { return true; }
  var p1 = head.next, p2 = head.next.next, p3 = head.next.next, odd = true;
  head.next = null;
  head.next.next = head;
  if(p3.next) { p3 = p3.next; odd = false }
  while(p3.next) {
    walker = walker.next;
    doubleWalker = doubleWalker.next;
    if (doubleWalker.next) doubleWalker = doubleWalker.next;
    
  }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
};
