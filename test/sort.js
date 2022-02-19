import './helper/setup.js';

import { bubbleSort, mergeSort } from '../lib/sort.js';

describe('bubbleSort', () => {
  it('case #1', () => {
    const arr = [2, 11, 7, 15];
    bubbleSort(arr);
    chai.expect(arr).to.deep.equal([2, 7, 11, 15]);
  });

  it('random array with 10000 numbers', () => {
    const arr = randomArr(10000);
    const sortedArr = jsSort(arr);
    bubbleSort(arr);
    chai.expect(arr).to.deep.equal(sortedArr);
  });
});

describe('mergeSort', () => {
  it('case #1', () => {
    const arr = [2, 11, 7, 15];
    chai.expect(mergeSort(arr)).to.deep.equal([2, 7, 11, 15]);
  });

  it('random array with 10000 numbers', () => {
    const arr = randomArr(10000);
    const sortedArr = jsSort(arr);
    chai.expect(mergeSort(arr)).to.deep.equal(sortedArr);
  });
});

function jsSort(arr) {
  return [...arr].sort((a, b) => a - b);
}
function randomArr(size) {
  return Array(size).fill().map(() => Math.floor(Math.random() * size * 100));
}
