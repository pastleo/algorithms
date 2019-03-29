// https://leetcode.com/problems/two-sum
const twoSum = (arr, target) => {
  const matching = {};
  let i = 0;
  while(i < arr.length) {
    const matched = matching[arr[i]];
    if(matched !== undefined) {
      return [matched, i];
    } else {
      matching[target - arr[i]] = i;
    }
    i++;
  }
}

export default twoSum
