/*
 * @Author: MarioGo
 * @Date: 2021-11-30 13:55:43
 * @LastEditTime: 2021-12-01 15:14:58
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /01-算法库/OneHundred-DayPlan-02/ 链表/es6.js
 * https://programmercarl.com/0707.%E8%AE%BE%E8%AE%A1%E9%93%BE%E8%A1%A8.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 * 
 * push
 * insert
 * getElementAt
 * remove
 * indexOf
 * removeAt
 * isEmpty
 * size
 * toString
 */
class LinkNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const MyLinkedList = function () {
  this._size = 0;
  this._tail = null;
  this._head = null;
};

MyLinkedList.prototype.push = (element) => {
   const node = new Node(element);
   let currtent
   if(this._head == null){  //添加头部
     this._head = node;
   }else{
     current = this._head;
     while(current){   
       currtent = current.next
     }
     current.next = node;  //添加尾部
   }
   this._size++; //长度递增
}

// 删除
MyLinkedList.prototype.removeAt = (index)=>{
  //  边界条件
    if(index <0 || index >= this.count) return undefined;
    let current = this._head
    if(index ===0){
      this._head = current.next  //删除头部
    }else{
       let previous ; //前一个序列
       while(current){
          previous = current
          current = current.next
       }
      previous.next = current.next
    }
    this._size--; 
    return current.element //返回当前值
}

// 迭代到目标位置
MyLinkedList.prototype.getElementAt = (index)=>{
  //  边界条件
   if(index < 0 || index >= this._size) return undefined;
   let current = this._head

   while(index >= 0 && current){
     current = current.next
     index--;
   }
   return current
}

// 获取当前节点
MyLinkedList.prototype.getNode = (index) => {
  if (index < 0 || index >= this._size) return null;
  //  创建虚拟头
  let cur = new LinkNode(0, this._head);
  //  遍历链表
  while (index > 0) {
    cur = cur.next;
    index--;
  }

  return cur;
};

// 返回一个元素的位置

MyLinkedList.prototype.indexOf = (element) => {
   let current = this._head
   let i = 0;
   while (current){
     current = current.next
     i++
     if(current.val === element) return i;
   }
   return -1
}

MyLinkedList.prototype.toString = () => {
   if(this._head == null ) return ''

 




}











