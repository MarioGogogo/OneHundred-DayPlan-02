/*
 * @Author: MarioGo
 * @Date: 2021-11-28 16:27:22
 * @LastEditTime: 2021-11-28 19:11:44
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/ 链表/删除.js
 * 可以输入预定的版权声明、个性签名、空行等
 */


function ListNode(val){
   this.val = val;
   this.next = null;
}

function deleteNode(node){
   node.val = node.next.val
   node.next  = node.next.next
}  