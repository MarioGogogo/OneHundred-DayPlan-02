/**
 *   [h e l l o ] --- [o ll e h]
 */

/**
 * 首尾 替换   1 2 3 | 4 5 6 --- [1,6] == [6,1]
 * @param s
 * @returns {*}
 */
const reverseString = function (s){
     for (let i = 0;i<s.length/2; i++){
         //结构替换
         [s[i],s[s.length -1]]  = [s[s.length-1],s[i]];
     }
     return s;
}


const reverseString2 = function (s){
    for (let i = 0; i < s.length /2 ; i++) {
        const a = s[i]
        //最后一位给第一位
        s[i] = s[s.length - i - 1]
        // 临时遍历 给 最后一位
        s[s.length - i - 1] = a
    }
}


