class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productOfAll = 1;
        let result = [];
        let hasZero = false;
        for (let num of nums) {
            if (num === 0&& hasZero===false) {
                hasZero = true;
                continue;
            }
            productOfAll *= num;
        }
        for (let num of nums) {
            if (!hasZero) {
                result.push(productOfAll / num);
                continue;
            }
            if (hasZero && num !== 0) {
                result.push(0);
            } else {
                result.push(productOfAll);
            }
        }
        return result;
    }
}
