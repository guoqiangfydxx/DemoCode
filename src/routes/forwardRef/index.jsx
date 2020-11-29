import React from 'react'
import { Button } from 'antd'

const NameInput = React.forwardRef((props, ref) => (
    <div>
        <p>函数组件</p>
        <input ref={ref} />
    </div>
))

class MyComponent extends React.Component {
    state = {
        value: ''
    }

    handleChange = e => {
        const { value } = e.target
        this.setState({
            value
        })
    }

    render() {
        return <div>
            <p>目标组件</p>
            <input value={this.state.value} onChange={this.handleChange} ref={this.props.ref} />
        </div>
    }
}

const Hoc = (WrapperComponent) => {
    return React.forwardRef((props, ref) => {
        return <WrapperComponent ref={ref} {...props} />
    })
}

class TestForwardRef extends React.Component {
    constructor(props) {
        super(props)
        this.funcRef = React.createRef()
        this.hocRef = React.createRef()
        this.hocFunRef = React.createRef()
    }

    handleClick = () => {
        console.log('this.funcRef>>>>>', this.funcRef.current.value)
    }

    handleClick2 = () => {
        console.log('this.hocRef>>>>', this.hocRef.current)
    }

    handleClick3 = () => {
        console.log('this.hocFunRef>>>>>', this.hocFunRef.current.value)
    }

    render() {
        const Test = Hoc(MyComponent)
        const Test2 = Hoc(NameInput)
        return (
            <div>
                <Button onClick={this.handleClick}>转发函数组件中dom到外层组件</Button>
                <NameInput ref={this.funcRef} />
                <Test ref={this.hocRef} />
                <Button onClick={this.handleClick2}>高阶组件获取包裹组件</Button>
                <Test2 ref={this.hocFunRef} />
                <Button onClick={this.handleClick3}>高阶组件获取包裹组件中的dom节点的ref</Button>
            </div>
        )
    }
}

export default TestForwardRef