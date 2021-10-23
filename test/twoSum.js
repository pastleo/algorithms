import '../lib/helper/node-chai.cjs';
import twoSum from '../lib/twoSum.js'

it('twoSum #1', () => {
  chai.expect(twoSum(
    [2, 7, 11, 15], 9
  )).to.deep.equal([0, 1]);
});
