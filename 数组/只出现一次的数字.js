/*
 * @Author: MarioGo
 * @Date: 2021-10-31 16:14:45
 * @LastEditTime: 2021-11-06 19:21:22
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/数组/只出现一次的数字.js
 * 非空数组  除了某个元素只出现一次以外，其他元素均出现好2次
 * [2 2 1] --- 1    [4 1 2 1 2] --- 4
 */

/**
 * 异或比较 
 * 相同的数都会异或成0，唯一出现的数与0异或就会得到其本身
 */
const singleNumber = (nums) =>{
   return  nums.reduce((accVal,currVal)=> accVal ^ currVal)
}

console.log('object :>> ', singleNumber([4 ,1 ,2 ,1, 2]));