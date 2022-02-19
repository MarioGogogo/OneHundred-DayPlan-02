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

const nums = [2, 7, 11, 15]
function twoSum(nums, target) {
  const lookup = {}
  let res = []
  nums.some((v, i) => {0
    if (lookup[v] !== undefined) {
      res = [lookup[v], i]
      return true
    } else {
      // 现存一个 {9-2:1}  == {7:1}  然后再遍历一个值是否有 7
      lookup[target - v] = i
      return false
    }
  })
  return res
}
let result = twoSum(nums, 9)
console.log(result)
