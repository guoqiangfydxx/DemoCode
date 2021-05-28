import React from "react";
class Logic extends React.Component {
  state = {};

  componentDidMount() {
    // 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
    //  在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 9];
    function getMissingNum(nums) {
      const len = arr.length;
      let result = 0;
      for (let i = 0; i <= len; i++) {
        const num = nums[i] ^ i;
        result = result ^ num;
      }
      return result;
    }

    function getMissNum(nums) {
      let left = 0;
      let right = nums.length;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === mid) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return left;
    }

    // 输入两个链表，找出它们的第一个公共节点。
    function getFirstCommonNode(head1, head2) {
      const map = new Map();
      let curr1 = head1;
      while (curr1) {
        map.set(curr1, true);
        curr1 = curr1.next;
      }
      let curr2 = head2;
      while (curr2) {
        if (map.has(curr2)) {
          return curr2;
        }
        curr2 = curr2.next;
      }
      return null;
    }

    function getFirstCommonNode2(headA, headB) {
      let currA = headA,
        currB = headB;
      while (currA !== currB) {
        if (currA === null) {
          currA = headB;
        } else {
          currA = currA.next;
        }
        if (currB === null) {
          currB = headA;
        } else {
          currB = currB.next;
        }
      }
      return currA;
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
        return;
      }
      const temp = root.left;
      root.left = mirrorTree(root.right);
      root.right = mirrorTree(temp);
      return root;
    }

    function getMirrorNode(head) {
      if (!head) {
        return;
      }
      const left = head.left;
      head.left = head.right;
      head.right = left;
      getMirrorNode(head.left);
      getMirrorNode(head.right);
      return head;
    }

    // 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
    function isSymmetry(head) {
      function dfs(left, right) {
        if (left === null && right === null) {
          return true;
        }
        if (
          (left === null && right) ||
          (right === null && left) ||
          left.val !== right.val
        ) {
          return false;
        }
        return dfs(left.left, right.right) && dfs(left.right, right.left);
      }
      return dfs(head.left, head.right);
    }

    // 或者借用一个数组来解决这个问题
    function isSymmetry1(root) {
      if (!root) {
        return true;
      }
      const queue = [root.left, root.right];
      while (queue.length) {
        const right = queue.pop();
        const left = queue.pop();
        if (!left && !right) {
          continue;
        }
        if (!left || !right || left.val !== right.val) {
          return false;
        }
        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
      }
      return true;
    }

    // 寻找数组中超过一半的数字
    // 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字,你可以假设数组是非空的，并且给定的数组总是存在多数元素。
    let arr1 = [2, 5, 5, 5, 8];
    function majorityElement(nums) {
      const map = new Map();
      for (const num of nums) {
        map.set(num, map.get(num) > 0 ?  map.get(num) : 0);
      }
      const middle = Math.floor(nums.length / 2);
      for (const [key, val] of map.entries()) {
        if (val > middle) {
          return key;
        }
      }
    }

    // 摩尔投票法
    function majorityElement(nums) {
      let votes = 0,
        x;
      for (const num of nums) {
        if (votes === 0) {
          x = num;
        }
        if (x === num) {
          votes++;
        } else {
          votes--;
        }
      }
      return x;
    }

    // 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为O(n)。
    let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    // 数组中有正数也有负数，所以加当前的数字，有可能会造成正影响，也有可能会造成负影响
    // 对于这种问题，一般情况下我们使用动态规划来解决这个问题，我们设置f(i)是以索引i结束的连续子数组的最大和，那么对于这个索引值i的数字来说，其如果为正数的话，那么f(i) = f(i-1) + nums[i], 如果其为负数的话，那么f(i) = f(i-1)
    // 而初始值的话f(0) = nums[0]
    // 之前的判断是有问题的，其实对于f(i)来说，应该看f(i-1)，如果f(i-1)小于等于0的话，那么说明f(i-1) + nums[i]一定比nums[i]要小
    function maxSubArray(nums) {
      const len = nums.length;
      const dp = new Array(len);
      dp[0] = nums[0];
      for (let i = 1; i < len; i++) {
        if (dp[i - 1] > 0) {
          dp[i] = dp[i - 1] + nums[i];
        } else {
          dp[i] = nums[i];
        }
      }
      return Math.max(...dp);
    }

    // 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
    // 这种方式不推荐
    function findFirstChar(s) {
      for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
          return s[i];
        }
      }
      return " ";
    }

    function findFirstChar(s) {
      const map = new Map();
      for (const char of s) {
        map.set(char, map.get(char) > 0 ?  map.get(char) + 1 : 1);
      }
      for (const [key, val] of map) {
        if (val === 1) {
          return key;
        }
      }
      return " ";
    }

    // 给定一棵二叉搜索树，请找出其中第k大的节点。
    // 二叉搜索树的中序遍历正好是一个递增序列，这样的话其倒序就是一个递减序列了，维护一个序号，当其正好等于k的时候就可以返回对应的值
    function getKthNode(root, k) {
      let num = 0,
        result;
      function dfs(head) {
        if (head) {
          return;
        }
        dfs(head.right);
        num++;
        if (num === k) {
          result = head.val;
          return;
        }
        dfs(head.left);
      }
      dfs(root);
      return result;
    }

    // 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
    function getDepth(root) {
      let depth = 0;
      if (!root) {
        return 0;
      }
      let queue = [root];
      while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
          const node = queue.shift();
          if (node.left) {
            queue.push(node.left);
          }
          if (node.right) {
            queue.push(node.right);
          }
        }
        depth++;
      }
      return depth;
    }
    // 对于这道题广度优先遍历是很好理解的，对于深度优先遍历则不太好理解
    var maxDepth = function (root) {
      if (!root) {
        return 0;
      }
      return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    };

    // 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
    // 关于这个问题，我们最先想到的一种解决方案就是每遍历到一个节点的时候，就获取当前节点的左右子树的深度，然后判断其深度的差值是否小于1
    // 而另外一个解法就是后序遍历+剪枝。后续遍历首先会获取到左右子树的深度，然后会判断他们的差值，如果要是小于等于1的话，那么默认就会返回当前子树
    // 的深度，如果说差值大于1的话，那么就返回-1；然后left和right会判断深度是否等于-1，如果等于的话就会向上退回
    function isBalanced(root) {
      function dfs(root) {
        if (!root) {
          return 0;
        }
        let left = dfs(root.left);
        if (left === -1) {
          return -1;
        }
        let right = dfs(root.right);
        if (right === -1) {
          return -1;
        }

        return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : -1;
      }

      return dfs(root) !== -1;
    }
  }

  render() {
    return <div className="logic">this is a algorithm page</div>;
  }
}
export default Logic;
