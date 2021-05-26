import React from 'react'
class Logic extends React.Compeont {
  state = {

  }

  componentDidMount() {
    // 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
    //  在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
    let arr = [0,1,2,3,4,5,6,7,9]
    function getMissingNum(nums) {
      const len = arr.length
      let result = 0
      for (let i = 0; i <= len; i++) {
        const num = nums[i] ^ i
        result = result ^ num
      }
      return result
    }

    function getMissNum(nums) {
      let left = 0
      let right = nums.length
      while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === mid) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
      return left
    }

    // 输入两个链表，找出它们的第一个公共节点。
    function getFirstCommonNode(head1, head2) {
      const map = new Map()
      let curr1 = head1
      while (curr1) {
        map.set(curr1, true)
        curr1 = curr1.next
      }
      let curr2 = head2
      while (curr2) {
        if (map.has(curr2)) {
          return curr2
        }
        curr2 = curr2.next
      }
      return null
    }

    function getFirstCommonNode2(head1, head2) {
      let currA = headA, currB = headB
      while(currA !== currB) {
          if (currA === null) {
              currA = headB
          } else {
              currA = currA.next
          }
          if (currB === null) {
              currB = headA
          } else {
              currB = currB.next
          }
      }
      return currA
    }


    /**
     * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

          例如输入：

               4
             /   \
            2     7
           / \   / \
          1   3 6   9
          镜像输出：

               4
             /   \
            7     2
           / \   / \
          9   6 3   1
     */

    function mirrorTree(root) {
      if (!root) {
          return
      }
      const temp = root.left;
      root.left = mirrorTree(root.right)
      root.right = mirrorTree(temp)
      return root;
    }

    function getMirrorNode(head) {
      if (!head) {
          return
      }
      const left = head.left
      head.left = head.right
      head.right = left;
      getMirrorNode(head.left)
      getMirrorNode(head.right)
      return head
    }

    // 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
    function isSymmetry(head) {
        function dfs(left, right) {
            if (left === null && right === null) {
                return true
            }
            if ((left === null && right) || (right === null && left) || left.val !== right.val) {
                return false
            }
            return dfs(left.left, right.right) && dfs(left.right, right.left)
        }
        return dfs(head.left, head.right)
    }
  }

  render() {
    return (
      <div className='logic'>
        Logic
      </div>
    )
  }
}
export default Logic