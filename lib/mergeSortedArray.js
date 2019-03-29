// https://leetcode.com/problems/merge-sorted-array/
const merge = (nums1, m, nums2, n) => {
  // from the back
  let j = m - 1, i = n - 1, k = nums1.length - 1;
  while(k >= 0) {
    if(nums1[j] > nums2[i] && j >= 0) {
      nums1[k] = nums1[j];
      j--;
    } else if (i >= 0) {
      nums1[k] = nums2[i];
      i--;
    }
    k--;
  }

  // from the front
  //let j = 0, i = 1;
  //const buffer = [nums2[0]];
  //while(i <= n) {
    //if(j < m) {
      //if(buffer[0] < nums1[j]) {
        //buffer.push(nums1[j]);
        //nums1[j] = buffer.shift();
      //}
    //} else {
      //nums1[j] = buffer.shift();
    //}
    //j++;
    //if(buffer.length == 0 || nums2[i] < buffer[0]) {
      //buffer.unshift(nums2[i]);
      //i++;
    //}
  //}
}

export default merge
