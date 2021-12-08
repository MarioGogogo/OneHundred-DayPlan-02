

const detectCycle = function(head){
    if(head == null) return null;
    let slow = head
    let fast = head
    let isCycle = false

    while(fast.next != null && fast.next.next != null){
       slow = slow.next;
       fast = fast.next.next;
       if(slow == fast){
        isCycle = true;
          break;
       }
    }

    if(!isCycle) return null; 
    //快指针回到 head 头部
    fast  = head
    while (slow != fast) {  
       slow = slow.next
       fast = fast.next
    }
    return fast 
}