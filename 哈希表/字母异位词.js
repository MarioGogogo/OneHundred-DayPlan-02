
/**
 |--------------------------------------------------
 |    aee   === eae
 |--------------------------------------------------
 */



// ? 这是什么呢
const s = "aee"
const t = "eae"
function isAnagram(s,t) {
    const record = new Array(26).fill(0)
            for (let i = 0; i < s.length; i++) {
                record[s.charCodeAt(i)-97]++
    }
    for (let i = 0; i < t.length; i++) {
        record[t.charCodeAt(i)-97]--;
    }
    for (let i = 0; i < 26; i++) {
        if(record[i] !== 0) return false
    }
    // record 都为 0
    return true

}

console.log('isAnagram',isAnagram(s,t))