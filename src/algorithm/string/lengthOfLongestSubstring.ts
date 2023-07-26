function lengthOfLongestSubstring(str: string) {
    let max = 0;
    let sub = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const idx = sub.indexOf(char);
        if (idx > -1) {
            sub = sub.substring(idx + 1);
        }
        sub += char;
        max = Math.max(max, sub.length);
    }
    return max;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
