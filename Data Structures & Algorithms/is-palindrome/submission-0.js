class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(char) {
        const code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) || // 0-9
            (code >= 65 && code <= 90) || // A-Z
            (code >= 97 && code <= 122) // a-z
        );
    }
    isPalindrome(s) {
        let strWithoutSpace = "";
        for (let i = 0; i < s.length; i++) {
            const currentChar = s[i];
            if (currentChar === " " || !this.isAlphaNum(currentChar)) continue;

            strWithoutSpace += currentChar;
        }
        strWithoutSpace = strWithoutSpace.toLowerCase();
        
        let left = 0;
        let right = strWithoutSpace.length-1;
        while (left < right) {
            let currentLeftChar = strWithoutSpace[left];
            let currentRightChar = strWithoutSpace[right];
            if (currentLeftChar !== currentRightChar) return false;
            left++
            right--
        }
        return true;
    }
}
