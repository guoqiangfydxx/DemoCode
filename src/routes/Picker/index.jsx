import React from 'react'
class TestPicker extends React.Component {
  state = {}

  componentDidMount() {
    // 这是一个m * n的二维数组，要求取礼物的最大值的话，使用动态规划方程.题目中规定对于任一个单元格只能够向右或者向下移动，这样的话对于特定单元格（i, j）来说其对应的礼物贡献值就只能来自于左边或者上边礼物的最大值再加上本身的礼物
    // f(i,j) = grid[i,j] + Math.max(grid[i-1][j] + grid[i][j-1]);当然对于第一行或者第一列的元素的话他们有点特殊，只能来自于左侧或者上边的礼物的最大值，需要特殊处理一下
    function solution(grid) {
      const row = grid.length
      const column = grid[0].length
      for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
          if (i === 0 && j === 0) {
            continue
          }
          if (i === 0) {
            // 第一行的元素，只能从左边获取到
            grid[i][j] += grid[i][j - 1]
          } else if (j === 0) {
            // 第一列的元素，只能从上边获取到
            grid[i][j] += grid[i - 1][j]
          } else {
            grid[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j])
          }
        }
      }
      return grid[row - 1][column - 1]
    } 
  }

  render() {
    return (

    )
  }
}

export default TestPicker