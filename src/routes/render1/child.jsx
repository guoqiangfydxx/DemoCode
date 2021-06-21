import React from 'react'
import { Input } from 'antd'
class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log('child constructor')
    }

    static getDerivedStateFromProps() {
        console.log('child getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('child mount')
    }

    getSnapshotBeforeUpdate() {
        console.log('child getSnapshotBeforeUpdate')
    }

    componentDidUpdate() {
        console.log('child update')
    }

    componentWillUnmount() {
        console.log('child unMount')
    }

    handleChange = (event) => {
        const { value } = event.target
        this.setState({
            val: value
        })
    }

    render() {
        console.log('child render')
        const { count } = this.props
        const { val } = this.state
        return (
            <div>这是子组件，count的值为{count},
                <Input value={val} onChange={this.handleChange} />
            </div>
        )
    }
}
export default Child