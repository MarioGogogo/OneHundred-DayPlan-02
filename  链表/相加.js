/*
 * @Author: MarioGo
 * @Date: 2021-11-28 22:07:22
 * @LastEditTime: 2021-11-30 13:03:59
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /01-算法库/OneHundred-DayPlan-02/ 链表/相加.js
 * 1-2-3 
 */

let  addNodeList = (l1,l2)=>{
   let p1 = l1
   let p2 = l2
   let p3 = l3

   let carry = 0
   while (p1 || p2) {
      const v1 = p1 ? p1.val : 0
      const v2 = p2 ? p2.val :0
      const val  = v1 + v2 + carry
      carry = Math.floor(val / 10)   
      p3.next = new ListNode(val % 10) //【0-9】 超过10 取 0 进1 下一次相加
      if(p1) p1 = p1.next
      if(p2) p2 = p2.next
      p3 = p3.next 
   }
   if(carry){
      p3.next = new ListNode(carry) //最后一位加1
   }

   return l3.next
}