import React from 'react'
class TestTable extends React.Component {
  state = {}

  render() {
    return <table border={1}>
      <thead>
        <th></th>
        <th>要素</th>
        <th>订单</th>
      </thead>
      <tbody>
        <tr>
          <td>车型</td>
          <td>要素车型: 件格式设置: 1.选中A列设置条件格式,以公式确定,里面公</td>
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
  }
}
export default TestTable