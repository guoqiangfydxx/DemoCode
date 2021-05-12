import React from 'react'
import ReactDom from 'react-dom'
class TestPortals extends React.Component {
  state = {}

  render() {
    return ReactDom.createPortal(<p>
      portal提供了一种可以将子节点渲染到父组件以外的dom节点的方案
    </p>, document.getElementById('root'))
  }
}
export default TestPortals