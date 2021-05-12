/**
 * ref转发是允许将ref自动通过组件传递给子组件的一种技术
 */
import React from 'react'
import { Button } from 'antd'
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
))

function logProps(Component) {
  class LogProp extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProp {...props} forwardedRef={ref} />
  })
}

class Child extends React.Component {
  state = {
    childState: 'sdf'
  }

  render() {
    return (
      <p>this is a child component</p>
    )
  }
}

const HocChild = logProps(Child)
class TestForWard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.btnRef = React.createRef()
    this.componentRef = React.createRef()
  }


  handleClick = () => {
    console.log('btnRef>>>>>',  this.btnRef)
  }

  handleClick2 = () => {
    console.log('componentRef>>>>>', this.componentRef)
  }

  render() {
    return (
      <div>
        <FancyButton ref={this.btnRef}>Click me</FancyButton>
        <Button onClick={this.handleClick}>test</Button>
        <HocChild ref={this.componentRef} />
        <Button onClick={this.handleClick2}>test2</Button>
      </div>

    )
  }
}
export default TestForWard