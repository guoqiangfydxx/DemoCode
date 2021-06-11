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
        map.set(num, map.get(num) > 0 ? map.get(num) : 0);
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
        map.set(char, map.get(char) > 0 ? map.get(char) + 1 : 1);
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

    // 从一副牌中随机抽出五张牌，判断一下这五张牌是否会组成一个顺子，其基本的判断逻辑就是找出非0的最大值和最小值，如果他们之间的差值要是小于5的话，那么就可以顺利组成一个顺子，如果不能的话，那么就不可以
    function isStraight(nums) {
      const set = new Set();
      let max = 0,
        min = 14;
      for (const num of nums) {
        if (num !== 0) {
          min = Math.min(min, num);
          max = Math.max(max, num);
          if (set.has(num)) {
            return false;
          }
          set.add(num);
        }
      }
      return max - min < 5;
    }

    // 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。
    // 左右两端的空格不需要，如果单词之间存在多个空格的话，那么反转后只需要保存一个空格即可
    // 这里使用的基本思路就是倒序遍历，然后利用两个指针来唯一确定单词的左右边界
    function reverseStr(s) {
      const str = s.trim();
      let i = str.length - 1;
      let j = i;
      const result = [];
      while (i >= 0) {
        while (i >= 0 && str[i] !== " ") {
          i--;
        }
        result.push(str.slice(i + 1, j + 1));
        while (str[i] === " ") {
          i--;
        }
        j = i;
      }
      return result.join(" ");
    }

    // 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
    // nums = [2,7,11,15], target = 9
    // 既然是一个递增数组的话，那么就可以使用双指针对撞来实现对应的功能
    function twoSum(nums, target) {
      let left = 0;
      let right = nums.length - 1;
      while (left < right) {
        if (nums[left] + nums[right] > target) {
          right--;
        } else if (nums[right] + nums[left] < target) {
          left++;
        } else {
          return [nums[left], nums[right]];
        }
      }
      return [];
    }

    // 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
    // target = 9, [[2,3,4],[4,5]]
    // 利用滑动窗口来解决这个问题，相对于之前的暴力解法要更加好看一点
    function findContinuousSequence(target) {
      // 滑动窗口左闭右开
      let i = 1;
      let j = 1;
      let sum = 0;
      const result = [];
      while (i <= target / 2) {
        if (sum < target) {
          sum += j;
          j++;
        } else if (sum > target) {
          sum -= i;
          i++;
        } else {
          const arr = [];
          for (let k = i; k < j; k++) {
            arr.push(k);
          }
          result.push(arr);
          sum -= i;
          i++;
        }
      }
      return result;
    }

    // 0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。
    // 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1， 因此最后剩下的数字是3。
    // 这个问题是偏向于数学推导计算的，我们先从第一次删除来看，其删除的区间是【0，n-1】，然后删除的数字是(m-1)%n;我们记第一个删除的数字为k，这样的话第二次删除的时候其实是从k+1开始，我们假设第二次不断删除后得到的结果为f1(n-1, m),其实对于给定的这个n来说f(n,m) = f1(n-1, m)
    // 我们假设y = f1(n-1, m), 而x = f(n-1, m),这样的话二者的操作区间的对应关系：
    // 操作1：k+1, k+2, k+3,...0,    1, ...,     k-1
    // 操作2：0,   1,   2,  n-k-1,   n -k,       n -2
    // 所以两者的对应关系：y = (x + k+ 1) % n = (f(n-1, m) + k + 1) % n = (f(n-1, m) + (m-1)%n + 1) % n = (f(n-1, m) + m) % n
    // 所以最终的递推结果就是f(n, m) = (f(n-1,m) + m) %n
    var lastRemaining = function (n, m) {
      let ans = 0;
      for (let i = 2; i <= n; i++) {
        ans = (ans + m) % i;
      }
      return ans;
    };

    // 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
    // 公共组件其实可以分为两种情况，一种情况就是给定的两个节点分别是位于某一个节点的左右子树的，而另外一种情况就是其中的某一个节点就是根节点，然后剩下的一个节点就是其对应的子节点
    function findPublicNode(root, p, q) {
      let result = null;
      function dfs(node) {
        if (!node) {
          return false;
        }
        const isInLeft = dfs(root.left, p, q);
        const isInRight = dfs(root.right, p, q);
        if (
          (isInLeft && isInRight) ||
          ((p.val === root.val || q.val === root.val) &&
            (isInLeft || isInRight))
        ) {
          result = root;
        }
        return (
          isInLeft || isInRight || p.val === root.val || q.val === root.val
        );
      }
      dfs(root);
      return result;
    }

    // 判断某一个链表是否是回文链表，如果要使得空间复杂度为O(1)的话，那么就只能从链表上来想办法了
    // 首先通过快慢指针来找到前半部分的尾节点
    function endOffFirstHalf(head) {
      let slow = head;
      let fast = head;
      while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow;
    }

    // 反转链表
    function reverseList(head) {
      let prev = null;
      let curr = head;
      while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      return prev;
    }

    function isValidRome(head) {
      if (!head) {
        return true;
      }
      const firstHeadHalf = endOffFirstHalf(head);
      const secondHalfNext = reverseList(firstHeadHalf.next);
      let p1 = head;
      let p2 = secondHalfNext;
      while (p2 !== null) {
        if (p1.val !== p2.val) {
          return false;
        }
        p1 = p1.next;
        p2 = p2.next;
      }
      // 还原链表
      firstHeadHalf.next = reverseList(secondHalfNext);
      return true;
    }

    // 之前遇到过类似的问题，但是那是仅仅是合并两个有序链表，但是现在子链表的个数扩展到了K个，这种情况下恐怕就不能够按照原来的那种方式进行合并了
    //

    // 环形链表，第一种解决思路就是利用快慢指针，如果存在环形的话，那么快指针一定会在某一个时刻和慢指针相遇，而没有的话就会直接退出循环
    function isHasCircle(head) {
      let slow = head;
      let fast = head;
      while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
          return true;
        }
      }
      return false;
    }

    // 另外一种就是利用map来做，但是这样的话虽然简单，但是会花费O(n)的空间来存储节点
    function isHasCircle2(head) {
      let curr = head;
      const map = new Map();
      while (curr) {
        if (map.has(curr)) {
          return true;
        }
        map.set(curr, true);
        curr = curr.next;
      }
      return false;
    }

    // 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
    // 这里使用到了递归的思路来解决问题，只不过每一次都会将链表分成两部分，然后再将两个子链表进行合并，直到最后的子链表只有一个长度的时候，那么整个链表就已经变成了一个有序链表
    // 获取链表的中间节点
    function getCenterNode(head) {
      let slow = head;
      let fast = head;
      while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow;
    }

    // 合并两个子链表，之前合并两个链表，头结点直接是使用构造函数来创建的，而不是通过判断来实现的
    function merge(left, right) {
      let head = null;
      let newHead = null;
      while (left && right) {
        if (left.val < right.val) {
          if (!newHead) {
            newHead = left;
            head = left;
          } else {
            newHead.next = left;
            newHead = newHead.next;
          }
          left = left.next;
        } else {
          if (!newHead) {
            newHead = right;
            head = right;
          } else {
            newHead.next = right;
            newHead = newHead.next;
          }
          right = right.next;
        }
      }
      newHead.next = left || right;
      return head;
    }

    function mergeSort(head) {
      if (head.next !== null) {
        let center = getCenterNode(head);
        const next = center.next;
        center.next = null;
        const left = mergeSort(head);
        const right = mergeSort(next);
        head = merge(left, right);
      }
      return head;
    }

    function sortList(head) {
      if (!head) {
        return null;
      }
      return mergeSort(head);
    }

    // 给你一个字符串s，然后需要你返回最长的回文字符串
    function test(s) {
      if (s.length === 1 || s.length === 0) {
        return s;
      }
      function isCircle(left, right) {
        const subStr = s.slice(left, right + 1);
        return subStr === subStr.split("").reverse().join("");
      }
      let result = "";
      for (let i = 0; i < s.length; i++) {
        for (let k = i + 1; k < s.length; k++) {
          if (isCircle(i, k) && k - i > result.length) {
            result = s.slice(i, k + 1);
          }
        }
      }
      return result;
    }

    // 这里使用的解法其实是使用中心扩展运算来实现的，其实可以这么理解就是说如果我们发现i和i+1对应的字符是相等的，那么对于[i,i+1]这样一个字符串来说就是回文的，然后就向两边扩展[i-1, j+1]，此时发现他们两个位置上的字符也是相等的话，那么回文字符串此时就已经变成了四个，然后继续向两边扩展，直到我们发现在某一个位置上这两个字符不再相等，那么此时就已经到达了回文字符串的边界位置，并且之后也不可能再组成更长的回文字符串，然后我们和现有的回文字符串进行计较长度，取较大的一个作为结果，这样一轮下来之后，那么就可以获取到最长的回文字符串了
    function longestPalindrome(str) {
      function getPalindRomeStr(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
          left--;
          right++;
        }
        return str.slice(left + 1, right);
      }
      if (str.length === 1) {
        return str;
      }
      let maxRes = 0,
        maxStr = "";
      for (let i = 0; i < str.length; i++) {
        let str1 = getPalindRomeStr(str, i, i);
        let str2 = getPalindRomeStr(str, i, i + 1);
        if (str1.length > maxRes) {
          maxStr = str1;
          maxRes = str1.length;
        }
        if (str2.length > maxRes) {
          maxStr = str2;
          maxRes = str2.length;
        }
      }
      return maxStr;
    }

    // 判断一个字符串是否为另外一个字符串的子串，需要保持原有的字符串顺序不变
    function isSubStr(str1, str2) {
      let index = 0
      for (let i = 0, len = str2.length; i < len; i++) {
        if (str2[i] === str1[index]) {
          index++
        }
      }
      return index === str1.length
    }

    // 给定一个有序数组，寻找某一个元素的左右位置
    function findPosition(nums, target) {
      let left = 0
      let right = nums.length - 1
      while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] > target) {
          right = mid - 1
        } else if (nums[mid] < target) {
          left = mid + 1
        } else {
          left = mid;
          break
        }
      }
      let prev = left
      let next = left + 1
      while (prev >= 0 && nums[left] === target) {
        prev--
      }
      while (next < nums.length && nums[next] === target) {
        next++
      }
      return [left + 1, next - 1]
    }
  }

  render() {
    return <div className="logic">this is a algorithm page</div>;
  }
}
export default Logic;
