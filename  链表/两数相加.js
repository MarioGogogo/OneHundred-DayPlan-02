/*
 * @Author: MarioGo
 * @Date: 2021-12-07 10:34:29
 * @LastEditTime: 2021-12-07 11:01:14
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/ 链表/两数相加.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const addTwoNumbers = (l1, l2) => {
  const stack1 = [];
  const stack2 = [];
  while (l1 != null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 != null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let cary = 0;
  let curr = null;

  while (stack1.length > 0 || stack2.length > 0) {
    let sum = 0;
    const s1 = stack1.length > 0 ? stack1.pop() : 0;
    const s2 = stack2.length > 0 ? stack2.pop() : 0;
    sum = s1 + s2;
    sum += cary;

    const node = new ListNode(sum %10)
    //余数
    cary = Math.floor(sum / 10)
   
    node.next = curr;
    curr = node;
  }
  //判断 如果 头部 200 900  头部9+2 进一位小数
   if(cary !== 0){
    const node = new ListNode(cary)
    node.next = curr;
    curr = node;
   }
  return curr;
};
