/*
 * @Author: MarioGo
 * @Date: 2021-10-25 21:16:23
 * @LastEditTime: 2021-10-26 21:37:58
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/字符串/最长回文字串.js
 * 给定一个字符串s 找到s中最长的回文子串 你可以给s最大长度为1000
 *  aabaad  --- bab  或者 aba
 *
 */

//第一种 循环遍历
const loginsetPalindrome = function (s) {
  const db = [];
  //生成n分小数组
  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
  }

  let max = -1; //长度
  let str = ''; //返回结果

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

// 中心点扩散 思路
const loginsetPalindrome2 = function (s) {
  if (s.length == 0) return '';

  let maxLength = 1;
  let maxIndex = 0;

  for (let i = 0; i < s.length; i++) {
    let curIndex = (left = right = i);
    while (left != 0) {
      if (s[left - 1] === s[curIndex]) {
        left--;
      } else {
        break;
      }
    }
    while (right !== s.length - 1) {
      if (s[right + 1] === s[curIndex]) {
        right++;
      } else {
        break;
      }
    }

    while (left != 0 && right !== s.length - 1) {
      if (s[left - 1] === s[right + 1]) {
        left--;
        right++;
      } else {
        break;
      }
    }

    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      maxIndex = left;
    }
  }
  return s.substring(maxIndex, maxIndex + maxLength);
};
console.log('object :>> ', loginsetPalindrome2('cbaaaabc'));
