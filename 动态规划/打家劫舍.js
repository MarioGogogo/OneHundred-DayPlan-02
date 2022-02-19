/**
|--------------------------------------------------
|  nums = [1,2,3,1] 不能相邻之间相加 问最高金额能有多少
|--------------------------------------------------
*/
//最后一步处理 n-1个房间
function rob(nums) {
  const N = nums === null ? 0 : nums.length

  if (N <= 0) return 0

  let dp = new Array(N)

  // 边界条件
  dp[0] = Math.max(0, nums[0])
  if (N == 1) return dp[0]
  dp[1] = Math.max(0, Math.max(nums[0], nums[1]))

  // 从下标2开始
  for (let i = 2; i < N; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[N - 1]
}

console.log(rob([1, 2, 3, 0]))
