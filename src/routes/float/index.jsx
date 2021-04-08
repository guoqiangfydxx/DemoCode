import React from 'react'
import './index.less'
class TestFloat extends React.Component {
    state = {

    }

    render() {
        return(
            <div>
               <div className='container'>
                    <p className='p1'>CSS多列布局(CSS Multi-column Layout)是一种定义了多栏布局的模块,可支持在布局中建立列(column)的数量,以及内容如何在列之间流动(flow)、列之间的间</p>
                    <section className='section'>
                    有记者就土耳其外交部召见中国驻土耳其大使一事向赵立坚提问。赵立坚表示，中国驻土耳其使馆的有关回应完全..
                    </section>
                    {/* <div className='empty'></div> */}
                </div> 
                <div className='content'>
                    <p>专家最新回应:备孕者可以接种新冠疫苗 近日,中国疾病预防控制中心专家回应:新冠病毒疫苗过敏的比例不高,“过敏体质”、备孕者</p>
                </div>
            </div>
            
        )
    }
}
export default TestFloat