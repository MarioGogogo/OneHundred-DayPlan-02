/*
 * @Author: MarioGo
 * @Date: 2021-12-03 11:32:43
 * @LastEditTime: 2021-12-03 15:37:16
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /01-算法库/OneHundred-DayPlan-02/ 链表/奇偶链表.js
 *  1-2-3-4-5-null  1-3-5-2-4-null
 */

const oddEventList = function (head) {
  if (head == null || head.next == null || head.next.next == null) {
    return head
  }
  let odd = head //奇数
  let even = head.next //偶数
  let evenHead = head.next //存一下头部
  while (even != null && even.next != null) {
    odd.next = odd.next.next
    odd = odd.next
    even.next = even.next.next
    even = even.next
  }
  //遍历结束  奇数列 + 偶数列
  odd.next = evenHead
  return head
}
