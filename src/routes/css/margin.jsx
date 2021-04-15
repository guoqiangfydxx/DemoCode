import React from 'react'
import './index.less'
class TestMargin extends React.Component {
    state = {}

    render() {
        // 1. 第一种，上下两个margin，如果都是正数的话，那么margin取的是他们之间的最大值
        // 2. 第二种效果，如果两个margin是一正一负的话，那么margin取得是两者相加的和
        // 3. 第三种如果两个margin都是负数的话，那么margin取的是两者中绝对者的最大值
        return (
            <div className='margin-container'>
                <div className='content1'>
                    <p className='content'>内容1</p>
                </div>
                <p className='content2'>内容2</p>
            </div>
        )
    }
}
export default TestMargin