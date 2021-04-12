import React from 'react'
import './index.less'
class TestMedia extends React.Component {
  state = {}

  render() {
    return (
      <div className='media-container'>
        <p>媒体查询 媒体查询可以让我们根据设备显示的特征(视口宽度、屏幕比列、设备方向)来设定CSS样式,媒体查询有媒体类型和一个或多个检测媒体特征的条件表达式组成。 meta标签 </p>
      </div>
    )
  }
}
export default TestMedia