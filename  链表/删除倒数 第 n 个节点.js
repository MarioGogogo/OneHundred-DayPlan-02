/*
 * @Author: MarioGo
 * @Date: 2021-12-06 09:55:03
 * @LastEditTime: 2021-12-06 13:07:58
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/ 链表/删除倒数 第 n 个节点.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const removeNthFromEnd = (head, n) => {
  let dummy = new ListNode(0);
  dummy.next = head;
  let left = dummy;
  let right = dummy;

  //ringt 指针 先前进几步 让 left right 保持 n 个间距
  while (n >= 0) {
    right = right.next;
    n--;
  }

  while (right != null) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;
  return dummy.next;
};
