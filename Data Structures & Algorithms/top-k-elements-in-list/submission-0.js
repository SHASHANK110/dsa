class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        const resultHeap = Array.from({ length: nums.length + 1 }, () => []);
        for (let num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
        for (let [key, value] of freqMap) {
            if (resultHeap[value] === 0) {
                resultHeap[value] = [];
            }
            resultHeap[value].push(key);
        }

        let result = [];
        for (let i = nums.length; i >= 0 && result.length < k; i--) {
            for (const num of resultHeap[i]) {
                result.push(num);
                if (result.length === k) break;
            }
        }
        return result;
    }
}
