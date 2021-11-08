/*
 * @Author: MarioGo
 * @Date: 2021-11-06 19:22:40
 * @LastEditTime: 2021-11-07 14:49:23
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /OneHundred-DayPlan-02/数组/旋转图形.js
 * 给定一个 n × n 􏰆二维一个图像􏰃将图像􏰡时􏰢旋􏰜 90 度。 不可以用另一个矩阵做代替
 */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

// =原地旋转=>
// [
//  [7,4,1],
//  [8,5,2],
// [9,6,3]
//  ]
// 规律：
// 1 旋转90°即：A[0,0] 转到 A[0,n] 位置；A[0,n] 转到 A[n,n] 位置；A[n,n] 转到 A[n,0] 位置；A[n,0] 转到 A[0,0] 位置。然后依次类推
// 2 上一步操作的是最外层的一层 环，我们只需要一层层往里执行相同的操作，最终即可完成整个矩阵的旋转
// 3 假设矩阵是 n*n 的，那么我们对 n/2 个环执行旋转即可完成
// 4 对于任一层的环，假如起始索引为 start，终止索引为 end，那么左上右下四个点分别可有表示为：A[start][start]，A[start][end]，A[end][start]，A[end][end]
// 5 某层环内的循环规律即 A[start][start->end]，A[start->end][end]，A[end][end->start]，A[end->start][start]。箭头表示递变情况
const rotate = (matrix) => {
  const len = matrix.length;
  for (let i = 0; i < len / 2; i++) {
    const start = i; // 当前环的起始下标（横纵均相等）
    const end = len - i - 1; // 当前环的终点下标（横纵均相等）
    for (let j = 0; j < end - start; j++) {
      const temp = matrix[start][start + j];
      //左下 --> 左上
      matrix[start][start + j] = matrix[end - j][start];
      // 右下 --> 左下
      matrix[end - j][start] = matrix[end][end - j];
      // 右上 --> 右下
      matrix[end][end - j] = matrix[start + j][end];
      // 左上 ---> 右上
      matrix[start + j][end] = temp;
    }
  }
  return matrix;
};

// ❤️❤️❤️ 最容易理解的一种
// 1.第一步上下颠倒位置
// 2.对角线交换元素

const rotate3 = (matrix) => {
  let top = 0;
  let down = matrix.length - 1;
  // 首先上下颠倒位置
  while (top < down) {
    const temp = matrix[top];
    matrix[top] = matrix[down];
    matrix[down] = temp;
    top++;
    down--;
  }
  // 对称线交换数据
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
};

const res = rotate(matrix2);
console.log('res :>> ', res);
