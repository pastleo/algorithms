import '../lib/helper/node-chai.cjs';

import merge from '../lib/mergeSortedArray.js'

it('mergeSortedArray #1', function () {
  const nums1 = [1,2,3,0,0,0]
  merge(
    nums1,
    3,
    [2,5,6],
    3
  )
  chai.expect(nums1).to.deep.equal([1,2,2,3,5,6]);
});
