const middleNode = (head) => {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
  
};
