/*
 * @Author: MarioGo
 * @Date: 2021-12-03 10:51:59
 * @LastEditTime: 2021-12-03 14:31:34
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /01-算法库/OneHundred-DayPlan-02/ 链表/相交链表.js
 * 相交链表  
 * 讲2个链表链接 形成  ab  ba 2条表
 * 定义2个指针
 * a头 头 到b头 继续走
 * b头 走 到a头 继续走
 * 如果值相交则会相遇
 */
const getIntersectionNode = (headA,headB)=>{
    if(headA == null || headB == null) return null;

    let pA = headA;
    let pB = headB;
    while (pA != pB) {
      pA = pA != null ? pA.next : headB;
      pB = pB != null ? pB.next : headA;
    }

    return pA ;
}