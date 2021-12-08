// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]


// 输入：head = [5], left = 1, right = 1
// 输出：[5]


function reverseBetween(head, left,right) {  
   let prev = null;
   let curr = head;
   let next = head;
   
  //前进遍历到 m 的位置
  while (left > 1){
    prev = curr;   //占位
    curr = curr.next;  //前进一位
    left--
  }  
   
  let prev2 = prev;
  let curr2 = curr;
  let diff = right - left //区间有多少位链表反转
  //这个区间内进行的就反转
  while (diff > 0){
    next = curr.next; 
    curr.next = prev;
    prev = curr
    curr = next;
    diff--
  }
  // left 大于 1 开始
  if(prev2 != null){
     prev2.next = prev;
  }else{
    prev2 = head
  }
  //拼接
  curr2.next = curr
  
  return head

}