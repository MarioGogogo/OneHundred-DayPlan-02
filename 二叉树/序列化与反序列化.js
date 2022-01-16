/**
|--------------------------------------------------
|  二叉树
      1
      /\
     2  3
        /\
        4 5   
 得到 [1,2,3 null,null,4,5]
|--------------------------------------------------
*/

//序列化 root 根节点
function serialize(root) {
  const result = []
  //遍历节点
  function traverseNode(node) {
    if (node === null) {
      result.push(null)
    } else {
      result.push(node.val)
      traverseNode(node.left)
      traverseNode(node.right)
    }
  }
  traverseNode(node)
  return result
}

// 反序列化  生产 二叉树
function deserialize(data) {
  const length = data.length
  if (length === 0) return null

  let i = 0 //标识

  function structure() {
    if (i >= length) return null
    const val = data[i]

    i++
    // 无子节点
    if (val === null) return null

    const node = new TreeNode(val)
    node.left = structure()
    node.right = structure()
    return node
  }
  return structure()
}
