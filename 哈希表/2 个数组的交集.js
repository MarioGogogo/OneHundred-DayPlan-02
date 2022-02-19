/**
 |--------------------------------------------------
 |
 |--------------------------------------------------
 */


const nums1 = [1,2,3,4,3,6,2,1]
const nums2 = [3,3,1,4]

function intersection(nums1,nums2){
     const  n1 = [...new Set(nums1)]
     const  n2= [...new Set(nums2)]
     const result = []
     for (const item of n1) {
         if(n2.includes(item)){
              result.push(item)
         }
     }
     return result
}

console.log(intersection(nums1,nums2))

