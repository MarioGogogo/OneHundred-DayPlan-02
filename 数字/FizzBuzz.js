/*
 * @Author: MarioGo
 * @Date: 2021-10-30 19:24:58
 * @LastEditTime: 2021-10-30 19:31:48
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/数字/FizzBuzz.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const fizzBuzz = (n)=>{
    const arr = [];
    for (let i = 1; i < n; i++) {
       if(i % 15 === 0){
         arr.push("FizzBuzz")
       }else if( i % 3 === 0){
         arr.push("Fizz")
       }else if(i % 5 === 0){
          arr.push("Buzz")
       }else{
          arr.push(i.toString())
       }
      
    }
    return arr;
}



const fizzBuzz2  = (n)=>{
   const arr = []
   for (let i = 1; i < n; i++) {
      let str = ""
      if( i % 3 === 0){
        str+="Fizz"
      }else if(i % 5 === 0){
        str+="Buzz"
      }else if(i % 3 !== 0 && i % 5 !== 0){  //其他条件
         str += i
      }
      arr.push(str);
   }
   return arr;
}