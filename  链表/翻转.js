/*
 * @Author: MarioGo
 * @Date: 2021-11-28 21:35:00
 * @LastEditTime: 2021-11-30 09:20:37
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /01-算法库/OneHundred-DayPlan-02/ 链表/翻转.js
 * 1-2-3-4-5-null  // 5-4-3-2-1-null
 */
class LinkedList {
  constructor() {
    this.data = null;
    this.next = null;
  }
}
const head = 1 - 2 - 3 - 4 - 5 - null; // 5-4-3-2-1-null
const reverseList = (head) => {
  let cur = head; //当前指针
  let prev = null; // 前一个指针
  let next = head;
  while (cur) {
    next = cur.next; //下一个指针
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};
