/*
 * @Author: MarioGo
 * @Date: 2021-12-06 17:02:21
 * @LastEditTime: 2021-12-06 17:55:38
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/ 链表/两两交换.js
 *  1-2-3-4  2-1-4-3
 */

const  swapPairs = function(head) {
    let dummy = new  ListNode(0)
    dummy.next = head
    let  current = dummy
     let n1 = dummy 
     let n2 = dummy 
    while(current.next != null && current.next.next != null){
        n1 = current.next;
        n2 = current.next.next
        current.next = n2;
         n1.next =   n2.next
         n2.next = n1
         current = n1
    }
    return dummy.next
};