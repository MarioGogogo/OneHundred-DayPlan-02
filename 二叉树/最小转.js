/*
 * @Author: MarioGo
 * @Date: 2021-12-03 15:40:36
 * @LastEditTime: 2021-12-03 17:24:20
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /01-算法库/OneHundred-DayPlan-02/二叉树/最小转.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

const MinStack = function(){
   this.stack = [];
   this.miniStack = [];

}

MinStack.prototype.push = function(x){
    this.stack.push(x);
    if(this.miniStack.length === 0){
      this.miniStack.push(x)
    }else{
      const min = Math.min(this.miniStack[this.miniStack.length-1],x)
      this.miniStack.push(min)
    }

}

MinStack.prototype.pop = function(){
    this.miniStack.pop()
    return this.stack.pop()
}

MinStack.prototype.top = function(){
    return this.stack[this.stack.length-1]
}


MinStack.prototype.getMin = function(){
  return this.miniStack[this.miniStack.length-1]
}