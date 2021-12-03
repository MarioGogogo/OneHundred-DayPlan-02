/*
 * @Author: MarioGo
 * @Date: 2021-11-28 15:00:33
 * @LastEditTime: 2021-12-03 14:08:10
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /01-算法库/OneHundred-DayPlan-02/ 链表/回文.js
 *  1-2-2 false  1-2-2-1 true
 */

const isPalindrome = (head)=>{
   let positveStr = ""
   let reverseStr = ""

   while (head){
     const nodeVal = head.val

     positveStr += nodeVal

     reverseStr = nodeVal + reverseStr;

     head = head.next //下一个节点
   }

   return positveStr === reverseStr
}