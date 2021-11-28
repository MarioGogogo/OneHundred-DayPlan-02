/*
 * @Author: MarioGo
 * @Date: 2021-11-28 21:35:00
 * @LastEditTime: 2021-11-28 21:37:11
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/ 链表/翻转.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const head = 1-2-3-4-5-null
const reverseList = (head) =>{

  let p1 = head
  let p2 = null

  while (p1) {
     const temp = p1.next
     p1.next = p1
     p2 = p1
     p1 = temp
  }
  return p2
}