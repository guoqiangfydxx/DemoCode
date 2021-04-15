import React from 'react'
import './index.less'
class TestBorder extends React.Component {
    state = {}
    
    render() {
        // 绘制一条0.5px的线
        return (
            <div className='border-container'>
                <p></p>
                <div className='content'>美国有线电视新闻网(CNN)消息,当天,美国联邦调查局(FBI)局长克里斯托弗·雷在国会参议院情报委员会听证会上声称,FBI现有2000多项与中国政府有关的调查,并且“每10个小时”就对中国开启一.</div>
            </div>
        )
    }
}
export default TestBorder