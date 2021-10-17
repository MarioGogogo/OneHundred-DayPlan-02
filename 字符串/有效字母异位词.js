/**
 *  给定两个字􏰤串 s 和 t 􏰎􏱅写一个函数来判断 t 是否是 s 异位词
 *
 *  anagrm  nagaram  --- true
 *  car  tar  --- false
 */

//比较2个数组中每一个字符排序后 是否相等

const s = "anagram"
const t = "nagaram"

const isAnagram = (s,t)=>{
     const sArr = s.split('')
    const tArr = t.split('')
    //字符串排序
    const sortFn = (a,b)=>{
         return a.charCodeAt(0) - b.charCodeAt(0);
    }
    sArr.sort(sortFn);
     tArr.sort(sortFn);
     //字符串拼接是否相等
     return sArr.join('') === tArr.join('')
}


//记录每一个字母出现的次数 [a:1,b:0,c:2]

const isAnagram2 = (s,t)=>{
     if(s.length !== t.length) return false

    const hash = {}


    for (const k of s) {
        hash[k] = hash[k] || 0;
        hash[k] += 1;
    }

    for (const k of t) {
        //如果出现没这个值 肯定不相等
        if(!hash[k]) return  false
        hash[k] -= 1;
    }
    return  true;

}
isAnagram2(s,t)