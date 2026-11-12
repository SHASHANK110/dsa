class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const delimiter = ":;";
        let str = "";
        for (let i = 0; i < strs.length; i++) {
            str += strs[i] + delimiter;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let resultStrs = [];
        let currentWord = "";
        for (let i = 0; i < str.length; i++) {
            const currentChar = str[i];
            const nextChar = str[i + 1];

            if (currentChar == ":" && nextChar === ";") {
                resultStrs.push(currentWord);
                currentWord = "";
            } else if (currentChar === ";"&& str[i-1]===":") {
                continue;
            } else {
                currentWord += currentChar;
            }
        }
        return resultStrs;
    }
}
