/*
 * @Author: MarioGo
 * @Date: 2021-10-30 19:33:06
 * @LastEditTime: 2021-10-31 16:12:46
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/数组/旋转数组.js
 * 给定一个数组，将数组中的元素向右移动k个位置，其中k是非负数。
 * [1,2,3,4,5,6,7] k = 3  ----> [5,6,7,1,2,3,4]
 */

// 计算循环次数  pop 返回被删的数据  unshift 加入第一个数组
const rotate = (nums, k) => {
  k = k % nums.length;
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};

//计算循环次数  slice 截取长度  unshift全部插入

const roatate2 = (nums, k) => {
  const l = nums.length;
  k = k % l;
  for (let i = 0; i < k; i++) {
    nums.unshift(...nums.slice(l - k, k));
  }
  return nums;
};
