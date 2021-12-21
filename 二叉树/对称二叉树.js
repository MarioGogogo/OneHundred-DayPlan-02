/**
|--------------------------------------------------
       1
      /\
     2  2
    /\  /\
   3 4 4 3
|--------------------------------------------------
*/

const isSymmetric = (root) => {
  if (!root) {
    return true
  }

  return isSameTree(root.left, root.right)
}
// 判断二叉树是否对􏰓􏰄􏰌接去判断根左子树和右子树是否相同
const isSameTree = (r, l) => {
  if (r === null) return l === null

  if (l === null) return r === null

  if (r.val !== l.val) return false

  return isSameTree(r.left, l.right) && isSameTree(r.right, l.left)
}
