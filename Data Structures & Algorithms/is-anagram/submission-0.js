class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqCounter = new Map();
        if (s.length !== t.length) return false;
        for (let i = 0; i < s.length; i++) {
            const currentChar = s[i];
            const freqOfChar = freqCounter.get(currentChar);

            freqCounter.set(currentChar, (freqOfChar || 0) + 1);
        }

        for (let j = 0; j < t.length; j++) {
            const currentChar = t[j];
            if (!freqCounter.has(currentChar) || freqCounter.get(currentChar) <= 0) {
                return false;
            }

            freqCounter.set(currentChar, freqCounter.get(currentChar) - 1);
        }
        return true;
    }
}
