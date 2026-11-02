class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freqMap = new Map();
        for (let i = 0; i < nums.length; i++) {
           const existingVal= freqMap.get(nums[i])
            freqMap.set(nums[i], (existingVal || 0) + 1);
        }

        const frequencies = [...freqMap.values()];
        for(const freq of frequencies){
            if(freq>1) return true
        }
        return false;
    }
}
