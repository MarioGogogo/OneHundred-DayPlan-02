/*
 * @Author: MarioGo
 * @Date: 2021-12-20 14:07:07
 * @LastEditTime: 2021-12-20 14:23:21
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/二叉树/有序数组转二×数组.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// const list = [-10,-3,0,5,9]  ----> [0,-3,9,10,null,5,null]

const sortedArrToBST = (arr) => {
  return initTreenodes(arr, arr.length - 1, 0)
}
function initTreenodes(arr, end, start) {
  if (start <= end) {
    //获取中间值
    const mid = start + parseInt((end - start) / 2, 10)
    const root = Node(arr[mide])
    //递归
    root.left = initTreenodes(arr, mid - 1, start)
    root.right = initTreenodes(arr, end, mid + 1)
    return root
  } else {
    return null
  }
}
