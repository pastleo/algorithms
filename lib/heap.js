class Heap {
  /**
   * @callback compareFn
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */

  /**
   * @param {compareFn} compareFn - default: minHeap
   */
  constructor(compareFn = ((a, b) => a - b)) {
    this.compareFn = compareFn;
    this.data = [];
  }

  /**
   * @returns {number}
   */
  peak() {
    return this.data[0];
  }

  /**
   * @param {number}
   */
  push(number) {
    this.data.push(number);

    // heapify up:
    let currentNodeI = this.data.length - 1;
    while (currentNodeI > 0) {
      const currentParentI = parentI(currentNodeI);
      if (this.compareFn(
        this.data[currentParentI],
        this.data[currentNodeI],
      ) > 0) {
        [this.data[currentNodeI], this.data[currentParentI]] = [this.data[currentParentI], this.data[currentNodeI]];
        currentNodeI = currentParentI;
      } else {
        break;
      }
    }
  }

  /**
   * @returns {number}
   */
  pop() {
    if (this.data.length <= 0) return;

    const poppedValue = this.data[0];
    this.data[0] = this.data.pop();

    // heapify down:
    let currentNodeI = 0, currentChildI = leftChildI(0);
    while (currentChildI < this.data.length) {
      const currentRightChildI = rightChildI(currentNodeI);

      if (currentRightChildI < this.data.length && this.compareFn(
        this.data[currentRightChildI],
        this.data[currentChildI],
      ) < 0) {
        currentChildI = currentRightChildI;
      }

      if (this.compareFn(
        this.data[currentChildI],
        this.data[currentNodeI],
      ) < 0) {
        [this.data[currentNodeI], this.data[currentChildI]] = [this.data[currentChildI], this.data[currentNodeI]];
        currentNodeI = currentChildI;
        currentChildI = leftChildI(currentNodeI);
      } else {
        break;
      }
    }

    return poppedValue;
  }
}

export default Heap;

function parentI(i) { return div2Ceil(i - 2); }
function leftChildI(i) { return i * 2 + 1; }
function rightChildI(i) { return i * 2 + 2; }

function div2Ceil(n) { return (n & 1) + (n >> 1); }
