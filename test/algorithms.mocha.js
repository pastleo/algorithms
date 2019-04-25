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
    //var result1 = {val: 3, next: {val: 2, next: {val: 1}}};
    //console.log(mergeTwoLists(l1, l2));
    //console.log(result1);
    chai.expect(mergeTwoLists(l1, l2)).to.deep.equal({val: 1, next: {val: 2, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5}}}}}});
    //chai.expect(reverseList(null)).to.deep.equal(null);
  });
});
