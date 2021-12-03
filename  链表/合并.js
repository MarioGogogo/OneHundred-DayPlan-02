/*
 * @Author: MarioGo
 * @Date: 2021-11-30 09:27:02
 * @LastEditTime: 2021-11-30 15:50:58
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /01-算法库/OneHundred-DayPlan-02/ 链表/合并.js
 * 1-2-4 1-3-4 ---> 1-1-2-3-4-5
 */

class NodeList{
   constructor(){
    this.val = val; 
    this.next = next;
   }
}

const mergeTwoLists = (l1,l2) => {
   if(l1 == null) return l2
   if(l2 == null) return l1

   if(l1.val < l2.val){
     l1 = mergeTwoLists(l1.next,l2)
     return l1
   }else{
     l2 = mergeTwoLists(l1,l2.next)
     return l2
   }

}

