/**
 *  "A man, a plan, a canal: Panama"  -- true
 *
 *  "race a car" -- false
 */


const isPalindrome = (s) => {
  // 1.将字符串转小写
  //2. 排除空格 非字母数字
  //3. 转出数组
  const arr = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('');

  let i = 0
  let j = s.length -1 ;
  //循环判断 首尾字母是否相等
  while(i < j){
    if(arr[i] === arr[j]){
      i+=1;
      j-=1;
    }else{
      return false
    }
  }
  //最后都返回 肯定是 回文
  return  true

};


//1.根据 第一题 小写 排除空格 非字母
// 2. --- [abcba] 字符串翻转 [abcba]
const isPalindrome2 = (s) => {

  const str = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

  const newStr = arr.split('').reverse().join();

  return str === newStr;


}