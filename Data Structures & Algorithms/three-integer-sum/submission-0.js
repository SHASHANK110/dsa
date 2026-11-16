class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
        // same first number as last time -> same triplets, skip
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum > 0) {
                right--;          // too big -> need a smaller number
            } else if (sum < 0) {
                left++;           // too small -> need a bigger number
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                // skip repeats of the number we just used
                while (left < right && nums[left] === nums[left - 1]) left++;
            }
        }
    }
    return result;
}
}
