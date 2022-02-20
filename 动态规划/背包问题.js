/**
|--------------------------------------------------
| 背包问题
|--------------------------------------------------
*/
function knapSack(c, w, v, n) {
  const kS = []
  //初始化
  for (let i = 0; i <= n; i++) {
    kS[i] = []
  }
  console.log('kS', kS)
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        kS[i][w] = 0
      } else if (weights[i - 1] <= w) {
        //放或者不放的2种方程模式
        const a = kS[i - 1][w - weights[i - 1]] + values[i - 1]
        const b = kS[i - 1][w]
        kS[i][w] = Math.max(a, b)
      } else {
        kS[i][w] = kS[i - 1][w] //取之前的值
      }
    }
  }
  console.log('%c 🍑 kS: ', 'font-size:20px;background-color: #465975;color:#fff;', kS)
  return kS[n][capacity] //最后一个方格值
}

const values = [3, 4, 5],
  weights = [2, 3, 4],
  capacity = 5,
  n = values.length
console.log(knapSack(capacity, weights, values, n))
