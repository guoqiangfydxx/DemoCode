import React from 'react'
import { Button } from 'antd'
import Child from './child'
import { useEffect } from 'react'
class Parent2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log('parent constructor')
    }

    static getDerivedStateFromProps() {
        console.log('parent getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('parent mount')
    }

    getSnapshotBeforeUpdate() {
        console.log('parent getSnapshotBeforeUpdate')
    }

    componentDidUpdate() {
        console.log('parent update')
    }

    componentWillUnmount() {
        console.log('parent unMount')
    }

    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        console.log('parent render')
        const { count } = this.state
        return (
            <div>这是父组件
                <Button onClick={this.handleClick}>click me</Button>
                <Child count={count} />
            </div>
        )
    }
}
export default Parent2