/**
 *  例子  "42  --- 42   "-42"--- -42   "words and 99" -- 0  "101 words" --- 101
 */
const MAX = 2147483647;
const MIN = -2147483648;
const myAtoi = (str) => {
    // 正则判断
    const result = str.trim().math(/^(-|\+)?\d+/g);
    console.log('%c  -> result: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', result);
    if(!parseInt(result[0])) return  0;
    const num = Number(result[0])
    if (num <= MIN) {
        return MIN;
    } else if (num >= MAX) {
        return MAX;
    } else {
        return num
    }
}




