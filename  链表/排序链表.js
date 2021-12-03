/*
 * @Author: MarioGo
 * @Date: 2021-12-03 10:27:32
 * @LastEditTime: 2021-12-03 11:20:09
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /01-算法库/OneHundred-DayPlan-02/ 链表/排序链表.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

const  sortList = (head)=>{
    if(head == null || head.next == null) return head;
  
    // 快慢指针 找中间点
    let fast  = head.next; 
    let slow = head
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next
    }

    let  middle = slow.next;
    // 打断链表
    slow.next = null   
    // 递归左右2边
    let left = sortList(head);
    let right = sortList(middle)

    let h = new ListNode(0)

    let res = h;

    while(left != null && right != null){
        if(left.val < right.val){
           h.next = left
           left = left.next  
        }else{
           h.next = right
           right = right.next  
        }
        h = h.next
    }

    h.next = left != null ? left : right

    return  res.next  //返回真正的head


}


const sortList2 = function(head){
  if(head == null || head == null){
    return head
  }

  let cur = head;let index = 0; const arr =[]

  while(cur !== null){
     arr[index]  = cur.val;
     cur = cur.next;
     index+=1

  }

  arr.sort((a,b) => a -b) //升序
  
  cur = head;
  index = 0; 

  while(cur !== null){
     cur.val = arr[index];
     index+=1
     cur = cur.next;
  }
  
  return head;

}