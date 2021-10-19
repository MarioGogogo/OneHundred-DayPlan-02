/**
 * 给一个A 字符串 hello word   再给一个b字符串 ll 找到第一个位置的下标 没有返回 -1
 * 注意  当 b字符串空 则 返回 0
 * @param a
 * @param b
 */

const a = "hello word"
const b = "ll"

const strStr = (a, b) => {
  //边界条件
  if(b.length === 0 ) return 0
  if(b.length > a.length) return -1
  if(b.length  === a.length ){
     return  b === a ? 0 : -1;
  }
  //循环  长度为 hello word - ll == 循环次数
  for (let i = 0; i < a.length - b.length; i++) {
     // 每一个下标📒过去
     if(a[i] !== b[0]){
       continue;
     }
     // 如果找到 看看 比如 l找到了 l加速2 的字符串  是否 等于 ll
     if(b.substring(i,i+b.length) === b){
       return  index;
     }
  }
  return  -1;
};

// 还有一种双层for循环不推荐