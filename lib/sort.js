/**
 * perform a bubble sort on arr, in-place
 *
 * @param {number[]} arr
 * @returns {void}
 */
export function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        sorted = false;
      }
    }
  }
}

/**
 * perform a merge sort on arr, return a new array
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
export function mergeSort(arr) {
  return splitMergeSort(arr, 0, arr.length);
}

/**
 * @param {number[]} arr
 * @param {number} startI
 * @param {number} endI
 * @returns {number[]}
 */
function splitMergeSort(arr, startI, endI) {
  if (endI - startI <= 1) return arr.slice(startI, endI);
  const middleI = startI + ((endI - startI) >> 1);
  
  const arr1 = splitMergeSort(arr, startI, middleI);
  const arr2 = splitMergeSort(arr, middleI, endI);
  return mergeSortedArrs(arr1, arr2);
}

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function mergeSortedArrs(arr1, arr2) {
  let i = 0, j = 0, result = [];
  while (i < arr1.length || j < arr2.length) {
    if (j >= arr2.length || (i < arr1.length && arr1[i] < arr2[j])) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result;
}

// run directly during development:
if (typeof testing === 'undefined') {
  const arr = Array(100).fill().map(() => Math.floor(Math.random() * 1000));
  console.log('arr:', arr);
  console.log('sorted arr by mergeSort:', mergeSort(arr));
  console.log('arr:', arr);

  console.log('bubbleSort(arr);');
  bubbleSort(arr);
  console.log('arr:', arr);
}
