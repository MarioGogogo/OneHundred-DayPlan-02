const removeNthFromEnd = (head,n)=>{
   let dummy = new ListNode(0)
    dummy.next = head;
   let left = dummy
   let right = dummy
   
   //ringt 指针 先前进几步 让 left right 保持 n 个间距
   while (n >= 0){
    right = right.next
    n--
   }
   
   while (right != null){
      left = left.next
      right = right.next
   }

   left.next = left.next.next
   return dummy.next

}