/*
 * @Author: MarioGo
 * @Date: 2021-10-23 23:05:55
 * @LastEditTime: 2021-10-23 23:47:31
 * @LastEditors: MarioGo
 * @Description: 最长公共前缀
 * @FilePath: /OneHundred-DayPlan-02/字符串/最长公共前缀.js
 * 从 "flower","flow","flight"]  找到 ”fl“ 相同部分
 *
 * 【dog racecar car]  找到 ”“
 *
 */

const strs = ['leets', 'leetcode', 'leet', 'leeds'];

const longestCommonPrefix = function (strs) {
  if (strs.length === 0 || strs == null ) return '';
  
  function findCommonPrefix(a, b) {
    let i = 0;
    //循环判断是否字母是否相等
    while (i < a.length && i < b.length && a.charAt(i) === b.charAt(i)) {
      i++;
    }
    return i > 0 ? a.substring(0, i) : '';
  }
  //默认 先去第一个字符串
  let commonPrefix = strs[0];
  // 从第二位开始比较
  for (let i = 1; i < strs.length; i++) {
    commonPrefix = findCommonPrefix(commonPrefix, strs[i]);
  }
  return commonPrefix;
};
