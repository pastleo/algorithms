import './helper/setup.js';

import Heap from '../lib/heap.js';

describe('Heap', () => {
  it('push, peak and pop values, case #1', () => {
    const heap = new Heap();
    const inputData = [1, 110, 88, 374, 56, 305, 374, 212, 114, 6, 310, 99, 293, 132, 273, 232, 46, 185, 288, 207];
    inputData.forEach(d => heap.push(d));

    chai.expect(heap.peak()).to.equal(1);
    chai.expect(heap.pop()).to.equal(1);
    chai.expect(heap.pop()).to.equal(6);
    chai.expect(heap.pop()).to.equal(46);
  });

  it('push, peak and pop values, using random inputData', () => {
    const compareFn = (a, b) => (a - b);
    const heap = new Heap(compareFn);
    const inputData = Array(20).fill().map(() => Math.floor(Math.random() * 400));
    const inputDataSorted = [...inputData].sort(compareFn);
    inputData.forEach(d => heap.push(d));

    chai.expect(heap.peak()).to.equal(inputDataSorted[0]);
    chai.expect(heap.pop()).to.equal(inputDataSorted[0]);
    chai.expect(heap.pop()).to.equal(inputDataSorted[1]);
    chai.expect(heap.pop()).to.equal(inputDataSorted[2]);
  });
});
