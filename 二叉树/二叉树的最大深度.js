/**
|--------------------------------------------------
| 二叉树最大深度

|--------------------------------------------------
*/

const arr = [3, 9, 20, null, null, 15, 7] //返回最大深度 3

function maxDepTh(root) {
  if (root === null) {
    return 0
  } else {
    //判断左右字数 是否为空 没有则继续递归
    const leftDepth = maxDepTh(root.left)
    const rightDepth = maxDepTh(root.right)
    //判断返回值 取大
    const childDepth = leftDepth > rightDepth ? leftDepth : rightDepth
    return 1 + childDepth
  }
}
