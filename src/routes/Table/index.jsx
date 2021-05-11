import React from "react";
class TestTable extends React.Component {
  state = {};

  componentDidMount() {
    // 打印出所有节点的和为目标值的所有路径，而且必须都是从树的根节点开始，然后向下一直到叶子结点
    /**
     * 
     *        5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
     */
    // 主要是的思路还是使用深度优先遍历来解决这个问题，但是有几个要点需要注意一下：首先是添加path的时候需要添加的path的一个copy数组，否则的话后续添加到path数组里面的值也会显示出来，第二个问题就是count，我们加了count之后需要在遍历完这个节点之后需要把这个节点的值减掉，否则的话就会变成整棵树中所有节点值的和
    function pathSum(root, target) {
      const result = [],
        path = [];
      let count = 0;
      function dfs(root) {
        if (!root) {
          return;
        }
        path.push(root.val);
        count += root.val;
        if (count === target && root.left === null && root.right === null) {
          result.push(path.slice());
        }
        dfs(root.left);
        dfs(root.right);
        path.pop();
      }
      dfs(root);
    }
    // 复杂链表的复制
    // 每一个节点中除了有一个next指针指向下一个节点之外，还有一个random节点指向当前链表中的任意一个节点或者是null,
    // 如果在复制next节点的时候，也直接复制了random节点的话，那么此时random指向的一定是一个老的链表中的节点，而不是新链表中的某一个节点，这样的话就会造成新老链表混在一起的局面。所以现在保守采取的一种解决方案是先复制next节点然后等全部的链表复制完成之后，再复制random节点
    var copyRandomList = function (head) {
      if (!head) {
        return null;
      }
      let curr = head;
      let newNode = new Node(null, null, null);
      const map = new Map();
      let pointer = newNode;
      // 先复制next
      while (curr) {
        pointer.next = new Node(curr.val, null, null);
        map.set(curr, pointer.next);
        pointer = pointer.next;
        curr = curr.next;
      }
      curr = head;
      pointer = newNode.next;
      // 后复制random指针
      while (curr) {
        pointer.random = map.get(curr.random);
        pointer = pointer.next;
        curr = curr.next;
      }
      return newNode.next;
    };
    // 另外一种针对此的优化方案，还是使用map来做，但是不会分成两次遍历，而是通过一次遍历来解决这个问题。每一次遍历的时候都会判断map中之前是否存储对对应的新节点，如果有的话就返回，否则的话就重新创建一个新的节点
    var copyRandomList = function (head) {
      if (!head) {
        return null;
      }
      const map = new Map();
      function getCloneNode(node) {
        if (!node) {
          return null;
        }
        if (map.has(node)) {
          return map.get(node);
        } else {
          const newNode = new Node(node.val, null, null);
          map.set(node, newNode);
          return newNode;
        }
      }
      let newHead = new Node(head.val, null, null);
      let old = head;
      let pointer = newHead;
      map.set(old, newHead);
      while (old) {
        pointer.next = getCloneNode(old.next);
        pointer.random = getCloneNode(old.random);
        old = old.next;
        pointer = pointer.next;
      }
      return newHead;
    };

    // 先利用next指针将新节点插入到原来的链表中，实行node1->newNode1->node2->newNode2->node3->newNode3，然后再复制random指针，最后裁剪原来的链表，获取到新链表
    var copyRandomList = function (head) {
      if (!head) {
        return null;
      }
      // 先复制next指针将新节点插入到原来的链表中
      let curr = head;
      while (curr) {
        const newNode = new Node(curr.val, null, null);
        newNode.next = curr.next;
        curr.next = newNode;
        curr = newNode.next;
      }
      // 在复制random指针
      curr = head;
      while (curr) {
        if (curr.random) {
          curr.next.random = curr.random.next;
        } else {
          curr.next.random = null;
        }
        curr = curr.next.next;
      }
      let oldHead = head;
      curr = head.next;
      let newHead = curr;
      while (oldHead) {
        oldHead.next = oldHead.next.next;
        oldHead = oldHead.next;
        if (curr.next) {
          curr.next = curr.next.next;
        } else {
          curr.next = null;
        }
        curr = curr.next;
      }
      return newHead;
    };

    // 字符串的排列，这样的话就相当于就字符串的全排列组合了，考虑使用深度优先搜索来解决这个问题，首先先固定第一位字符，然后固定第二位字符，最后固定第n位字符。当字符串存在重复字符的时候，排列方案中也存在重复的方案，此时应该保证每一种字符都只在此位固定一次
    var permutation = function (s) {
      const set = new Set();
      const path = [];
      const visited = [];
      dfs([...s], path, set, visited);
      return Array.from(set);

      function dfs(arr, path, set, visited) {
        if (arr.length === path.length) {
          set.add(path.join(""));
          return;
        }
        for (let i = 0; i < arr.length; i++) {
          if (visited[i]) {
            continue;
          }
          visited[i] = true;
          path.push(arr[i]);
          dfs(arr, path, set, visited);
          path.pop();
          visited[i] = false;
        }
      }
    };

    // 全排列
    function test(s) {
      const set = new Set();
      const visited = [];
      const path = [];
      dfs([...s], visited, path, set);
      return Array.from(set);
      function dfs(arr, visited, path, set) {
        if (path.length === arr.length) {
          set.add(path.join(""));
          return;
        }
        for (let i = 0; i < arr.length; i++) {
          if (visited[i]) {
            continue;
          }
          visited[i] = true;
          path.push(arr[i]);
          dfs(arr, visited, path, set);
          path.pop();
          visited[i] = false;
        }
      }
    }

    // 数字序列中某一位的数字
    // 数字按照0123456789101112131415…
    function findNthDigit(n) {
      let digit = 1,
        start = 1,
        count = 9;
      while (n > count) {
        n -= count;
        digit += 1;
        start *= 10;
        count = 9 * start * digit;
      }
      console.log("n>>>>>>", start, digit);
      const num = start + Math.floor((n - 1) / digit);
      console.log("num>>>>>>>>>>>>>>>>", num);
      return num.toString()[(n - 1) % digit];
    }



    // 第一种方法就是全排列，然后从中找出最小的那个值
    function test(arr) {
      const set = new Set()
      const visited = []
      const path = []
      function dfs(arr, visited, path, set) {
        if (path.length === arr.length) {
          set.add(path.join(''))
          return
        }
        for (let i = 0; i < arr.length; i++) {
          if (visited[i]) {
            continue
          }
          visited[i] = true
          path.push(arr[i])
          dfs(arr, visited, path, set)
          path.pop()
          visited[i] = false
        }
      }
      dfs(arr, visited, path, set)
      const result = Array.from(set).map(item => parseInt(item, 10))
      return Math.min(...result)
    }

    // [3,30,34,5,9], 输出：3033459
    // 排序判断规则：如果x + y > y + x的话，那么就说明x > y此时x应该排在y的后面返回值为1,如果x + y < y + x的话，那么就说明x < y
    function minNumber(arr) {
      arr.sort((a, b) => parseInt((a.toString() + b.toString()), 10) > parseInt((b.toString() + a.toString()), 10) ? 1 : -1)
      return arr.join('')
    }

    // 对于一个数字来说，从0-25可以分别被翻译成a-z，但是对于一个两位数而言，其通常可以拆分成两个一位数，或者直接被当成一个两位数就会有不同的翻译版本，现在要求一共有多少种不同的翻译方法
    let num = 12258
  }

  render() {
    return (
      <table border={1}>
        <thead>
          <th></th>
          <th>要素</th>
          <th>订单</th>
        </thead>
        <tbody>
          <tr>
            <td>车型</td>
            <td>
              要素车型: 件格式设置: 1.选中A列设置条件格式,以公式确定,里面公
            </td>
            <td>订单车型：标示出来;查找两表格相同数据时,两个表格既可以位</td>
          </tr>
          <tr>
            <td>租金</td>
            <td>要素租金: 32.15</td>
            <td>订单租金：15.32</td>
          </tr>
          <tr>
            <td>司机服务费</td>
            <td>要素司机服务费: 452.13</td>
            <td>订单司机服务费：352.12</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default TestTable;
