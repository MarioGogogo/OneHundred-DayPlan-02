/*
 * @Author: MarioGo
 * @Date: 2021-11-08 21:40:31
 * @LastEditTime: 2021-11-08 22:11:31
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/数组/从排序数组中删除重复项.js
 * 从排序数组中删除 重复项 不能申请额外的数组空间
 * 前提是有序数组
 *
 */
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 4];
//循环每一个元素 左右对比替换
const removeDuplicates = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i - 1, 1);
      i--;
    }
  }
  return nums.length;
};

const res = removeDuplicates(nums);
console.log('res :>> ', res);

// [0, 0, 1, 1, 1, 2, 2, 3, 4]; ✅
// [0,1,0,1,2] 🚫
const removeDuplicates2 = (nums) => {
  //初始第一个值肯定不重复
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    //左右不重复 则 计数值+1 继续往下一个元素比较
    if (nums[count] !== nums[i]) {
      nums[count + 1] = nums[i];
      count++;
    }
  }
  return count + 1;
};
