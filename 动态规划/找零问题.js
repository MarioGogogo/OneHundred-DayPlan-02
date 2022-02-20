/**
|--------------------------------------------------
| 找零问题
|--------------------------------------------------
*/
// function coinChange(coins, amount) {
//   const cache = []
//   const markeChange = (value) => {
//     if (!value) return []
//     if (cache[value]) return cache[value] //拿缓存

//     let min = []
//     let newMin
//     let newAmount

//     for (let i = 0; i < coins.length; i++) {
//       //遍历每一个硬币
//       const coin = coins[i]
//       // 对每一个面额计算剩余面额值
//       newAmount = value - coin
//       if (newAmount >= 0) {
//         newMin = markeChange(newAmount)
//         console.log('%c 🍆 newMin: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', newMin)
//       }
//       // 满足是三个条件之一
//       if (
//         newAmount >= 0 && //
//         (newMin.length < min.length || !min.length) && //找到新的最优解 并且 有长度
//         (newMin.length || !newAmount) //
//       ) {
//         min = [coin].concat(newMin) //面值 + 最优解长度
//         console.log('new Min', min + '==' + value)
//       }
//     }
//     console.log('%c 🌯 cache: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', (cache[value] = min))
//     return (cache[value] = min)
//   }
//   return markeChange(amount) //递归函数
// }

var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    dp[i] = Number.MAX_SAFE_INTEGER
    for (let j = 0; j < coins.length; j++) {
      // 如果当前最优解大于0 并且 剩余值大于0
      if (i - coins[j] >= 0 && dp[i - coins[j]] != Number.MAX_SAFE_INTEGER) {
        dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i])
      }
    }
  }
  console.log(dp)
  if (dp[amount] == Number.MAX_SAFE_INTEGER) {
    return -1
  }
  return dp[amount]
}
console.log(coinChange([1, 2, 3], 6))
console.log(coinChange([1, 2, 5], 11))
