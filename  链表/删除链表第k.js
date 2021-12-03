/*
 * @Author: MarioGo
 * @Date: 2021-11-30 16:04:26
 * @LastEditTime: 2021-11-30 16:30:09
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /01-算法库/OneHundred-DayPlan-02/ 链表/删除链表第k.js
 * 1-2-3-4-5 n=2 ====>  1-2-4-5
 */

// 已知没有告诉长度
// 1. 指针a 指向头  让后移动n步
// 2 指针b 指向头 和a 一起移动 当a=null 说明到底了  那么b指向了要删除的节点的前一个节点
// 3. a的next 指向要删除的下一个节点

const removeNthFormEnd = (head,n)=>{
   let first = head
   let second = head

   while (n > 0){
      first = first.next()
      n--
   }

   //边界判断
   if(!first) return head.next

 
   
   //一步一步往下遍历
   while(first.next){
      first = first.next
      second = second.next
   }
  

   //走到这里表示已经到了n的值
   second.next = second.next.next

  //返回表头
  
   return head
}