import React, { Fragment } from "react";
import { Button, Divider } from "antd";
import { node } from "prop-types";

const Placement = 1
const shouldTrackSideEffects = false
class TestDiff extends React.Component {
  state = {
    list: [
      {
        name: "tom",
        age: 13,
      },
      {
        name: "jerry",
        age: 23,
      },
      {
        name: "john",
        age: 27,
      },
      {
        name: "gary",
        age: 24,
      },
      {
        name: "louise",
        age: 25,
      },
    ],
    val: "",
    text: "文本展示1",
    isShowText: false,
  };

  componentDidMount() {
    console.log(TestDiff.prototype);
    // 从任一个节点向右，向下都可以走，如果一条路要是找不到对应的路径，那么或许第二条路就找到了。但是我们如何该如何解决这一类问题呢？给定的数组还是一个二维数组，
    // 但是如何在另外一条路失败了之后，再回到之前的起始点呢？这样的话应该需要使用一个map来存储之前走过的路径吗？但是这个map不能一直保存下去，原因很简单，一条路可能用到了其中的某一个节点走失败了，但是另外一条路也是用到了这个节点，但是却可以走成功，所以需要在走失败之后将原来的节点从map中清除掉，免得下一次使用的时候有问题
    // 我不知道该怎么描述这种思路，或许可以称之为存储思路

    var exist = function (board, word) {
      const row = board.length;
      const column = board[0].length;

      function dfs(i, j, board, word, index) {
        if (
          i < 0 ||
          i >= row ||
          j < 0 ||
          j >= column ||
          board[i][j] !== word[index]
        ) {
          return false;
        }
        if (index === word.length - 1) {
          return true;
        }
        // 记录board的值
        const temp = board[i][j];
        // 锁上，免得下一次查到重复的值
        board[i][j] = "-";
        const result =
          dfs(i - 1, j, board, word, index + 1) ||
          dfs(i + 1, j, board, word, index + 1) ||
          dfs(i, j - 1, board, word, index + 1) ||
          dfs(i, j + 1, board, word, index + 1);
        // 恢复现场
        board[i][j] = temp;
        return result;
      }

      for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
          if (dfs(i, j, board, word, 0)) {
            return true;
          }
        }
      }
      return false;
    };

    // 各个位置上的数字之和，数位之和
    // 机器人从左上角的位置，从四个方向上移动，这里求的是该机器人能够到达多少个格子，之前判断路径判断四个方向使用的是或运算符，这里应该不可以使用这种思路
    // 而且从各个方向上扩展的也都是可以访问到的方格，需要被记录在内的
    // 1. 第一种思路还是使用深度优先遍历，从每一个节点的四个方向扩展，同时使用一个map来记录曾经路过的节点，对于每一个节点如果其越界了，或者已经访问过了，或者不满足对应的条件的话就直接返回，这样一轮下来的话就把全部可以访问到的节点都访问到了
    // 2. 第二种思路是使用广度优先遍历，不像深度优先遍历超一个方向走，然后再回退，而广度优先遍历则是以平推的方式来推进
    function getCount(m, n, k) {
      const map = new Map();
      function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || map.get(`${i}-${j}`)) {
          return;
        }
        let arr1 = i.toString().split("");
        let arr2 = j.toString().split("");
        let num = 0;
        for (const a of arr1) {
          num += Number.parseInt(a, 10);
        }
        for (const a of arr2) {
          num += Number.parseInt(a, 10);
        }
        if (num > k) {
          return;
        }
        map.set(`${i}-${j}`, true);
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
      }
      dfs(0, 0);
      return Array.from(map.values()).length;
    }

    function getNum(num) {
      let sum = 0;
      while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }
      return sum;
    }

    function getCount1(m, n, k) {
      const set = new Set([`0-0`]);
      const directionArr = [
        [1, 0], // 上
        [0, 1], // 右
        [-1, 0], //下
        [0, -1], // 左
      ];
      const queue = [[0, 0]];
      while (queue.length) {
        const [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
          const offsetX = x + directionArr[i][0];
          const offsetY = y + directionArr[i][1];
          if (
            offsetX < 0 ||
            offsetX >= m ||
            offsetY < 0 ||
            offsetY >= n ||
            set.has(`${offsetX}-${offsetY}`) ||
            getNum(offsetX) + getNum(offsetY) > k
          ) {
            continue;
          }
          set.add(`${offsetX}-${offsetY}`);
          queue.push([offsetX, offsetY]);
        }
      }
      return set.size;
    }

    // 1. 单个节点，分为两种，单个的react节点/单个的Fragment节点

    setTimeout(this.changeText, 1000);

    function placeChild(newFiber, lastPlacedIndex, newIndex) {
      // 保存最新的index
      newFiber.index = newIndex;

      if (!shouldTrackSideEffects) {
        // Noop.
        return lastPlacedIndex;
      }

      // 找到对应的老的fiber
      var current = newFiber.alternate;

      if (current !== null) {
        var oldIndex = current.index;

        // oldIndex < lastPlacedIndex的话，说明本次更新的节点需要向右移动，才能保证展示在界面上的效果和预想的是一样的
        if (oldIndex < lastPlacedIndex) {
          // This is a move.
          newFiber.flags = Placement;
          return lastPlacedIndex;
        } else {
          // oldIndex > lastPlacedIndex，节点位置不需要改动，只需要更新lastPlacedIndex的值即可
          // This item can stay in place.
          return oldIndex;
        }
      } else {
        // current没有的话，说明newFiber是新建的，此时不需要更新lastPlacedIndex
        newFiber.flags = Placement;
        return lastPlacedIndex;
      }
    }

    // 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。
    // 请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

    /**
     * 给定的绳子长度和截成的段数都是一个未知数，然后给定了这样一种假设之后，让我们来求对应的最大乘积是多少，这种情况下我们只能使用动态规划来解决这个问题了吧
     * 我们假设f(n, m)标识长度为n的绳子截成m段的最长乘积，那么初始值f (n, 1) = n;这个递归函数应该推论出来呢，不知道应该怎么推导出这个递推公式
     * 使用dp作为动态规划数组，然后由于要求m > 1 && n > 1的话，那么绳子的长度最少为2，截成的段数也最少是2段，所以初始值dp[2] = 1;然后外层循环从3一直遍历到n标识绳子的长度
     * 而内层循环是从1到i，表示绳子可以被截成i和i - j,此时的乘积就变成了判断i * (i - j)和i * dp[i - j]的最大值，选取最大值作为dp[i]的结果，
     * dp[i - j]已经包含了对应长度为i- j的绳子截断为m段的最优解
     */

    var cuttingRope = function (n) {
      const dp = new Array(n + 1).fill(1);
      for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
          dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
      }
      return dp[n];
    };

    // 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
    // 当然对于我们来说，如果n不是特别大的话，那么直接循环遍历求取乘积也是一种最快的解决方案，但是现在就会出现n特别大的情况，导致超时
    //

    var myPow = function (x, n) {
      if (n === 0) {
        return 1;
      }
      if (n === 1) {
        return x;
      }
      let result = 1;
      let absn = Math.abs(n);
      while (absn) {
        if (absn & 1) {
          result = result * x;
        }
        x = x * x;
        absn = absn >>> 1;
      }
      return n < 0 ? 1 / result : result;
    };

    // 1. 第一种思路直接循环求取乘积，会超出时间限制是行不通的
    // 2. 目前只能采取第二种思路，快速幂，这里使用了二进制的角度来分析这个函数，https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/solution/mian-shi-ti-16-shu-zhi-de-zheng-shu-ci-fang-kuai-s/
    function myPow(x, n) {
      if (n === 0) {
        return 1;
      }
      if (n === 1) {
        return x;
      }
      let result = 1;
      let absn = Math.abs(n);
      while (absn) {
        if (absn & 1) {
          result = result * x;
        }
        x = x * x;
        absn = absn >>> 1;
      }
      return n < 0 ? 1 / result : result;
    }

    // B是A的子节点，所以会出现两种情况，B和A的子树是一样的，B相对于A的子树来说少了一部分
    var isSubStructure = function (A, B) {
      let currA = A;
      let currB = B;
      if (!B || !A) {
        return false;
      }

      let result = false;

      function isSame(rootA, rootB) {
        console.log(rootA, rootB);
        if ((!rootA && !rootB) || (rootA && !rootB)) {
          return true;
        }
        if (rootA.val !== rootB.val) {
          return false;
        }
        if ((rootB.left && !rootA.left) || (rootB.right && !rootA.right)) {
          return false;
        }
        return (
          isSame(rootA.left, rootB.left) && isSame(rootA.right, rootB.right)
        );
      }

      function dfs(root) {
        if (!root) {
          return false;
        }
        if (root.val === currB.val) {
          // 判断是否一致
          result = isSame(root, currB) || result;
        }
        return dfs(root.left) || dfs(root.right);
      }
      dfs(currA);
      return result;
    };

    function isSubStructure(A, B) {
      if (!A || !B) {
        return false;
      }
      function isSameTree(nodeA, nodeB) {
        if ((!nodeA && !nodeB) || (nodeA && !nodeB)) {
          return true;
        }
        if ((!nodeA && nodeB) || nodeA.val !== nodeB.val) {
          return false;
        }
        return (
          isSameTree(nodeA.right, nodeB.right) &&
          isSameTree(nodeA.left, nodeB.left)
        );
      }
      const queue = [A];
      const currB = B;
      let result = false;
      while (queue.length) {
        const node = queue.shift();
        if (node.val === currB.val) {
          result = isSameTree(node, currB) || result;
        }
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      return result;
    }

    // 广度优先遍历
    function levelOrder(root) {
      if (root === null) {
        return [];
      }
      const queue = [root];
      const result = [];
      while (queue.length) {
        const node = queue.shift();
        result.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      return result;
    }

    /**
           *   3
              / \
              9  20
                /  \
              15   7

              奇数行：从左到右
              偶数行：从右到左
     */
    // 第一种思路是遍历二叉树的时候还是之前的逻辑，全部存入到queue也都是按照从左到右的顺序存储的，然后使用一个level用来标记当前是奇数行还是偶数行，如果是偶数行的就会把queue反转赋值给另外一个数组，这样做的坏处就是需要遍历两次，第一次是存储之字形的值，第二次是为了遍历二叉树
    function levelOrder(root) {
      if (root === null) {
        return [];
      }
      const result = [];
      let queue = [root];
      let level = 0;
      while (queue.length) {
        level++;
        const len = queue.length;
        const arr = level % 2 === 0 ? queue.slice().reverse() : queue;
        const levelArr = [];
        for (let i = 0; i < len; i++) {
          const node1 = arr[i];
          levelArr.push(node1.val);
          const node = queue.shift();
          if (node.left) {
            queue.push(node.left);
          }
          if (node.right) {
            queue.push(node.right);
          }
        }
        result.push(levelArr);
      }
      return result;
    }

    // 第二种思路二叉树的广度优先遍历和存储值也是分开的，和第一种思路不同的是，第一种思路在遍历每一层之前会将源数组就根据奇偶行进行反转，而第二种思路是在遍历后将存储的值根据奇偶行进行反转
    var levelOrder = function (root) {
      if (!root) {
        return [];
      }
      let level = 0;
      const result = [];
      const queue = [root];
      while (queue.length) {
        let len = queue.length;
        result[level] = [];
        while (len) {
          const node = queue.shift();
          result[level].push(node.val);
          node.left && queue.push(node.left);
          node.right && queue.push(node.right);
          len--;
        }
        if (level % 2) {
          result[level].reverse();
        }
        level++;
      }
      return result;
    };

    // 从上到下打印二叉树，如果要是按照奇数层和偶数层按照不同的判断方式往数组中添加元素，也不是不可以，但是就是读起来和理解起来太麻烦了。所以最简单的方式还是保持原来的广度优先遍历的逻辑不变，然后再根据不同的层级来反转数组，这样相对来说是更加容易理解和接受的
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      val: value,
    });
  };

  changeList = () => {
    const { list } = this.state;
    this.setState({
      list: [
        ...list,
        {
          name: "clover",
          age: 26,
        },
      ],
    });
  };

  handleDelete = () => {
    const { list } = this.state;
    list.pop();
    this.setState({
      list,
    });
  };

  changeText = () => {
    this.setState({
      text: "文本展示2",
    });
  };

  handleToggle = () => {
    this.setState({
      isShowText: !this.state.isShowText,
    });
  };

  render() {
    const { val, isShowText } = this.state;
    return (
      <div className="diff-container">
        {/* <ul>
          {list.map((item, index) => {
            const { name, age } = item;
            return <li key={index}>{`姓名：${name}, 年龄：${age}`}</li>;
          })}
        </ul>
        <p>------------------------------------------</p> */}
        {isShowText ? <p>p标签块</p> : <div>div标签块</div>}
        <input value={val} onChange={this.handleChange} />
        <Button onClick={this.handleToggle}>Toggle</Button>
        {/* <Divider>------------------</Divider>
        <Button onClick={this.changeList}>改变列表</Button>
        <Button onClick={this.handleDelete}>删除最后一个元素</Button> */}
      </div>
    );
  }
}

export default TestDiff;
