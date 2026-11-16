class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const leftNum = numbers[left];
            const rightNum = numbers[right];

            const currentSum = leftNum + rightNum;

            if (currentSum < target) {
                left++;
                continue
            }
            if (currentSum > target) {
                right--;
                continue
            }

            return [left+1,right+1]

        }
    }
}
