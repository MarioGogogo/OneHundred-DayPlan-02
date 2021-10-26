/*
 * @Author: MarioGo
 * @Date: 2021-10-26 21:41:54
 * @LastEditTime: 2021-10-26 22:07:33
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/数字/罗马数字转整数.js
 * 给定一个罗马字符 转化整数
 * III -- 3 IV - 4  LVIII--58 MCMXCIV--- 1994
 * 罗马字符 不能出现联系3个一样字符 比如 VVVV
 */

const num = 'MCMXCIV';
// 遍历罗马字符
const romanToIntOne = (num) => {
  const roman = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  const list = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (const key in roman) {
    //特殊值优先遍历
    if (num.includes(key)) {
      //正则去除已经拿到的数值
      const reg = new RegExp(key);
      num = num.replace(reg, '');
      result += roman[key];
    }
  }
  //剩下的值一个一个去list中找
  for (const i of num) {
    result += list[i];
  }

  return result;
};

const romanToIntOne2 = (num) => {
  let result = 0;

  for (const c of num) {
    switch (c) {
      case 'I':
        result += 1;
        break;
      case 'V':
        result += 5;
        break;
      case 'X':
        result += 10;
        break;
      case 'L':
        result += 50;
        break;
      case 'C':
        result += 100;
        break;
      case 'D':
        result += 500;
        break;
      case 'M':
        result += 1000;
        break;
    }
  }

  // 剩下特殊值处理
  // 为什么减2  因为 i + v 1+5 == iv -2 其他同理
  if (num.includes('IV') || num.includes('IX')) return (result -= 2);
  if (num.includes('XL') || num.includes('XC')) return (result -= 20);
  if (num.includes('CD') || num.includes('CM')) return (result -= 200);

  return result
};
