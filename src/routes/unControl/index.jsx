import React from 'react'
import { Select } from 'antd'
// 非受控组件，数据源是异步获取的，但是defaultValue如果才能起到效果呢？因为defaultValue只会在第一次起作用，而此时数据还在接口请求过程中，此时是无效的；而等待数据回来之后，此时再设置defaultValue已经不起作用了
// 1. 解决该问题的一个方案是延迟select的渲染，只有等defaultValue有值之后才会真正渲染下拉框，这样的话defaultValue就会起到对应的作用
// 2. 第二种解决方案是给select加上一个key，值为defaultValue；这里的原理是利用了diff，前后两次的key不一样，这样的话在diff的时候react在第二次的时候判断和前一次的key不一样，此时就会重新创建一个新的select，而此时defaultValue就起到了作用；算是一种解决方案
const mockData = [{
    name: '处理中',
    value: 1
}, {
    name: '新问题',
    value: 2
}, {
    name: '处理结束',
    value: 3
}]
const { Option } = Select
class UnControlComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultValue: '',
            list: []
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: mockData,
                defaultValue: 1
            })
        }, 8000)
    }

    render() {
        const { list, defaultValue } = this.state
        console.log('defaultValue', defaultValue)
        return (
            <div>
                <Select defaultValue={defaultValue} key={defaultValue} dropdownMatchSelectWidth={false}>
                    {list.map(item => {
                        const { name, value } = item
                        return <Option value={value} key={value}>
                            {name}
                        </Option>
                    })}
                </Select>
            </div>
        )
    }
}
export default UnControlComponent