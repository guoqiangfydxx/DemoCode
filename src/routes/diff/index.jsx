import React from "react";
import { Button, Divider } from "antd";
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
  };


  componentDidMount() {
    // 从任一个节点向右，向下都可以走，如果一条路要是找不到对应的路径，那么或许第二条路就找到了。但是我们如何该如何解决这一类问题呢？给定的数组还是一个二维数组，
    // 但是如何在另外一条路失败了之后，再回到之前的起始点呢？这样的话应该需要使用一个map来存储之前走过的路径吗？但是这个map不能一直保存下去，原因很简单，一条路可能用到了其中的某一个节点走失败了，但是另外一条路也是用到了这个节点，但是却可以走成功，所以需要在走失败之后将原来的节点从map中清除掉，免得下一次使用的时候有问题
    // 我不知道该怎么描述这种思路，或许可以称之为存储思路

    var exist = function(board, word) {
      const row = board.length;
      const column = board[0].length;
      
      function dfs(i, j ,board, word, index) {
          if (i < 0 || i>= row || j < 0 || j >= column || board[i][j] !== word[index]) {
              return false;
          }
          if (index === word.length - 1) {
              return true;
          }
          // 记录board的值
          const temp = board[i][j];
          // 锁上，免得下一次查到重复的值
          board[i][j] = '-' 
          const result = dfs(i-1, j, board, word, index + 1) || dfs(i + 1, j, board, word, index + 1) || dfs(i, j-1, board, word, index + 1) || dfs(i, j+1, board, word, index + 1)
          // 恢复现场
          board[i][j] = temp;
          return result;
      }
      
      for(let i = 0; i < row; i++) {
          for(let j = 0; j < column; j++) {
              if (dfs(i, j, board, word, 0)) {
                  return true;
              }
          }
      }
      return false
  }

    function test(board, word) {
      const row = board.length
      const column = board[0].length
      
      function dfs(i, j, board, word, index) {
        if (i < 0 || i >= row || j < 0 || j >= column || board[i][j] !== word[index]) {
          return false
        }
        if (index === word.length - 1) {
          return true
        }
        const temp = board[i][j]
        board[i][j] = '-'
        const result = dfs(i - 1, j, board, word, index + 1) || dfs(i + 1, j, board, word, index + 1) || dfs(i, j - 1, board, word, index + 1) || dfs(i, j + 1, board, word, index + 1)
        board[i][j] = temp
        return result
      }

      for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
          if (dfs(i, j, board, word, 0)) {
            return false
          }
        }
      }
      return false
    }
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

  render() {
    const { list, val } = this.state;
    return (
      <div className="diff-container">
        <ul>
          {list.map((item, index) => {
            const { name, age } = item;
            return <li key={index}>{`姓名：${name}, 年龄：${age}`}</li>;
          })}
        </ul>
        <p>------------------------------------------</p>
        <input value={val} onChange={this.handleChange} />
        <Divider>------------------</Divider>
        <Button onClick={this.changeList}>改变列表</Button>
        <Button onClick={this.handleDelete}>删除最后一个元素</Button>
      </div>
    );
  }
}

export default TestDiff;
