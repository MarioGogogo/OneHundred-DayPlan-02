/*
 * @Author: MarioGo
 * @Date: 2021-10-25 21:16:23
 * @LastEditTime: 2021-10-25 21:52:40
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/字符串/最长回文字串.js
 * 给定一个字符串s 找到s中最长的回文子串 你可以给s最大长度为1000
 *  babad --- bab  或者 aba
 *
 */

const loginsetPalindrome = function (s) {
  const db = [];
  //生成n分小数组
  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
  }

  let max = -1;
  let str = '';

  for (let l = 0; l < s.length; l++) {
    for (let i = 0; i + l < s.length; i++) {
      const j = i + l;

      if (l === 0) {
        dp[i][j] = true;
      } else if (l <= 2) {
        // 长度2 或 3 首尾相等则是回文子串
        if (s[i] === s[j]) {
          dp[i][j] = true;
        } else {
          dp[i][j] = false;
        }
      } else {
        //这里重点分析 长度大于3
        if (s[i] === s[j] && dp[i + 1][j - 1]) {
          dp[i][j] = true;
        } else {
          dp[i][j] = false;
        }
      }

      if (dp[i][j] && l > max) {
        max = l;

        str = s.substring(i, j + 1);
      }
    }
  }

  return str;
};
