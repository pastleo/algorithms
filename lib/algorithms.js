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
