/*
 * @Author: MarioGo
 * @Date: 2021-11-06 19:22:23
 * @LastEditTime: 2021-11-06 19:29:58
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/数组/两数之和.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

//找出nums=[2,7,11,15],target=9 有几个数

// 暴力解法  遍历每一个数 target- 第一个数 = 余数  然后余数再继续找

//第二种思路

const towSum = (nums, target) => {
  const lookup = {};
  let res = [];
  nums.some((v, i) => {
    //  判断target-v 数据是否已经存在
    if (lookup[target - v]) {
      // 数据存在 则直接拿出来
      res = [lookup[target - v], i];
      return true;
    } else {
      //  将每一个元素添加到表中
      lookup[v] = i;
      return false;
    }
  });
  return res;
};
