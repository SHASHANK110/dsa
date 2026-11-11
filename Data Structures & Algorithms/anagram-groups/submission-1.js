class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const freqMap = new Map();

        for (let i = 0; i < strs.length; i++) {
            const selectedStr = strs[i];
            let charArr = new Array(26).fill(0);
            let j = 0;
            while (j < selectedStr.length) {
                const currentCharIndex = selectedStr.charCodeAt(j) - "a".charCodeAt(0);
                charArr[currentCharIndex] = charArr[currentCharIndex] + 1;
                j++;
            }
            const combinedKey = charArr.join("#");

            if (!freqMap.has(combinedKey)) {
                freqMap.set(combinedKey, []);
            }
            freqMap.get(combinedKey).push(selectedStr);
        }
        return Array.from(freqMap.values());
    }
}
