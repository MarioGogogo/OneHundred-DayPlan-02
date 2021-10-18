/**
 *  "leetcode" --- 0  "loveleetcode" -- 2
 */

//循环每一个  判断 indexof  lastindexof是否相等
const firstUniqChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    const isSame = str.indexOf(str[i]) === str.lastIndexOf(str[i]);
    if (isSame) return i;
    return -1;
  }
};

// 哈希保存 出现的字母 +1  最后看看 谁是 1；
const firstUniqChar2 = (s) => {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]] += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }
  return -1;

};

