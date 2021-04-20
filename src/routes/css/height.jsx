import React from 'react'
import './index.less'
class TestHeight extends React.Component {
    state = {
        clientX: 0,
        clientY: 0
    }

    componentDidMount() {
        const node = document.querySelector('.box')
        document.body.addEventListener('mousedown', event => {
            console.log('down', event)
        })
        document.body.addEventListener('mousemove', event => {
            console.log('move', event)
            const { clientX, clientY } = event
            this.setState({
                clientX,
                clientY
            })
        })
        document.body.addEventListener('mouseup', event => {
            console.log('up', event)
        })
    }

    render() {
        const { clientX, clientY } = this.state
        return (
            <div className='height-container'>
                <div className='box' style={{ top: clientY, left: clientX }}>据港媒报道，事主是一名约90岁的退休老妇，居住在港岛山顶独立屋，与一名外籍司机及两名家佣同住。

去年8月，事主接获一名自称“内地官员”的来电，说怀疑她的身份遭人盗用，涉及内地一宗严重的案件，需要检查她的银行账户是否涉及“黑钱”，以此为借口要求她把存款转账至指定账户，还承诺检查完成后将会在今年5月归还。

若说此刻事主还在惊恐和将信将疑之间犹疑不决，
                </div>
                <div>
                屡次三番的巨额转账引起银行职员注意和起疑，职员曾向事主查询汇款原因和目的，事主用“购置山顶物业”的理由搪塞过去。职员一听，觉得言之成理，于是就没有再进一步跟进。
                </div>
                
            </div>
        )
    }
}
export default TestHeight