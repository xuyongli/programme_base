/* 678. 有效的括号字符串
给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

任何左括号 ( 必须有相应的右括号 )。
任何右括号 ) 必须有相应的左括号 ( 。
左括号 ( 必须在对应的右括号之前 )。
* 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
一个空字符串也被视为有效字符串。
示例 1:

输入: "()"
输出: True
示例 2:

输入: "(*)"
输出: True
示例 3:

输入: "(*))"
输出: True
注意:

字符串大小将在 [1，100] 范围内。 */

function validParenthesis(source: string) {
    const leftBracketStack = [];
    const asteriskStack = [];
    for (let i = 0; i < source.length; i++) {
        const char = source[i];
        switch(char) {
            case '(':
                leftBracketStack.push(i);
                break;
            case '*':
                asteriskStack.push(i);
                break;
            case ')':
                if (leftBracketStack.length) {
                    leftBracketStack.pop();
                } else if (asteriskStack.length) {
                    asteriskStack.pop();
                } else {
                    return false;
                }
                break;
            default:
                break;
        }
        
    }

    while(leftBracketStack.length && asteriskStack.length) {
        const leftBracketIndex = leftBracketStack.pop()!;
        const asteriskIndex = asteriskStack.pop()!;
        if (leftBracketIndex > asteriskIndex) return false;
    }
    return leftBracketStack.length === 0;
}

console.log(validParenthesis(''));
console.log(validParenthesis('()'));
console.log(validParenthesis('(*)'));
console.log(validParenthesis('(*()'));
console.log(validParenthesis('*)'));
console.log(validParenthesis('*(**('));