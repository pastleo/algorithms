describe('sum', function () {
  it('should return sum of arguments', function () {
    chai.expect(sum(1, 2)).to.equal(3);
  });
});

describe('removeNthFromEnd', function () {
  it('removeNthFromEnd', function () {
    var test1 = {val: 1, next: {val: 2, next: {val: 3}}}
    var result1 = {val: 2, next: {val: 3}}
    chai.expect(removeNthFromEnd(test1, 3)).to.deep.equal(result1);
    var test2 = {val: 1}
    chai.expect(removeNthFromEnd(test2, 1)).to.equal(undefined);
  });
});

describe('reverseList', function () {
  it('reverseList', function () {
    var test1 = {val: 1, next: {val: 2, next: {val: 3}}};
    var result1 = {val: 3, next: {val: 2, next: {val: 1, next: null}}};
    chai.expect(reverseList(test1)).to.deep.equal(result1);
    chai.expect(reverseList(null)).to.deep.equal(null);
  });
});

describe('mergeTwoLists', function () {
  it('mergeTwoLists', function () {
    var l1 = {val: 1, next: {val: 2, next: {val: 3}}};
    var l2 = {val: 2, next: {val: 4, next: {val: 5}}};
    chai.expect(mergeTwoLists(l1, l2)).to.deep.equal({val: 1, next: {val: 2, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5}}}}}});
  });
});

describe('isPalindrome', function () {
  it('isPalindrome', function () {
    var list1 = {val: 1, next: {val: 2, next: {val: 3}}};
    chai.expect(isPalindrome(list1)).to.equal(false);
    var list2 = {val: 1, next: {val: 2, next: {val: 3, next: {val: 2, next: {val: 1}}}}};
    chai.expect(isPalindrome(list2)).to.equal(true);
    var list3 = {val: 1, next: {val: 2, next: {val: 3, next: {val: 2, next: {val: 1, next: {val: 5}}}}}};
    chai.expect(isPalindrome(list3)).to.equal(false);
  });
});

describe('hasCycle', function () {
  it('hasCycle', function () {
    var list1a = {val: 5};
    var list1 = {val: 1, next: {val: 2, next: {val: 3, next: list1a}}};
    list1a.next = list1;
    chai.expect(hasCycle(list1)).to.equal(true);
    var list2 = {val: 1, next: {val: 2, next: {val: 3}}};
    chai.expect(hasCycle(list2)).to.equal(false);
  });
});

describe('isValidSudoku', function () {
  it('isValidSudoku', function () {
    var board1 = [
      ["8","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
    ];
    chai.expect(isValidSudoku(board1)).to.equal(false);

    var board2 = [
      ["5","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
    ];
    chai.expect(isValidSudoku(board2)).to.equal(true);
  });
});
