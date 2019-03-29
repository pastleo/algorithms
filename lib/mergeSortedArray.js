// https://leetcode.com/problems/merge-sorted-array/
const merge = (nums1, m, nums2, n) => {
  const buffer = [];
  let j = 0, i = 0;
  while(i < n) {
    let inserting;
    console.log(m, n, i, j, buffer, nums1, nums2, nums2[i], buffer[buffer.length - 1])
    if(buffer.length > 0 && nums2[i] > buffer[buffer.length - 1]) {
      inserting = buffer.pop();
    } else {
      inserting = nums2[i];
      i++;
    }
    console.log(inserting)
    if(inserting > nums1[j]) {
      j++;
    } else {
      buffer.push(nums1[j]);
      nums1[j] = inserting;
    }
  }
}

export default merge
