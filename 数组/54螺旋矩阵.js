/**
|--------------------------------------------------
| 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
|--------------------------------------------------
*/
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  let left = 0,
    top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1,
    ans = [] //新数组

  //不能越界
  while (left < right && top < bottom) {
    // 左右
    for (let i = left; i < right; i++) {
      ans.push(matrix[top][i])
    }
    // 右下
    for (let i = top; i < bottom; i++) {
      ans.push(matrix[i][right])
    }
    //右左
    for (let i = right; i > left; i--) {
      ans.push(matrix[bottom][i])
    }
    //左上
    for (let i = bottom; i > top; i--) {
      ans.push(matrix[i][left])
    }
    //跑完继续缩圈
    top++
    left++
    right--
    bottom--
  }

  //跳出循环
  if (top === bottom) {
    // 左右
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i])
    }
  } else if (left === right) {
    // 上下
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right])
    }
  }
  return ans
}
spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
])
