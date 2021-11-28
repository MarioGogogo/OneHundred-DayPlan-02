/*
 * @Author: MarioGo
 * @Date: 2021-11-28 15:00:45
 * @LastEditTime: 2021-11-28 19:07:00
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/ 链表/循环.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
//  快慢指针快跑  

const hasCycle = (head)=>{
    if(!head) return false;

    let fast = head;
    let slow = head;

    while(fast && fast.next){
       fast  = fast.next.next
       slow = slow.next;
       //如果快指针 追上了慢指针则表示 环形
       if(fast = slow) return true;  
    }
    return false; 
}  

// hash 算法
const hasCycle2 = (head)=>{
   if(!head) return false;

   const newData = new Map();

   while(head){
     if(newData.has(head)) return true;
     newData.set(head,1)
     head = head.next
   }
   
   return false;
}