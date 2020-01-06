import React from 'react'
import './index.less'

export default class ViewPort extends React.Component {
  state = {

  }

  render() {
    return (
      <div className='section-container'>
        <p className='content1'>
          11月11日，2019-2020赛季国际滑联花样滑冰大奖赛中国杯落幕，中国花滑队包揽双人滑、男单冠亚军。不过中国队总教练赵宏博表示：队伍表现出色，除了双人滑和男单，冰舞拿到第四名，女单也在向好，离北京冬奥会还有两年多，再给我们些时间吧！</p>
        <div className='content2'>
          双人滑，赵宏博表示：彭程 金杨由于在美国站的比赛中受伤，上一周的训练不是很系统，心态有点急，发不上劲，但在积极调整。隋文静韩聪要比前几个赛季好得多，虽然受到伤病影响，但他们现在很享受滑冰了，慢慢心态也成熟了，这场比赛基本发挥出了很好的训练水平。
        </div>
        <div className='card-list'>
          <div className='card-left'>
            <img src='http://img5.imgtn.bdimg.com/it/u=4199942866,89125153&fm=26&gp=0.jpg' alt='图片' />
          </div>
          <div className='card-right'>
            <h1>再聊移动端页面的适配</h1>
            <section>
              <p>从而让页面达么缩放的效果，也变相的实现页面的适配功能。而其主要的思想有三点：</p>
              <ul>
                <li>根据dpr的值来修改viewport实现1px的线</li>
                <li>根据dpr的值来修改html的font-size，从而使用rem实现等比缩放</li>
                <li>使用Hack手段用rem模拟vw特性</li>
                <li>有关于Flexible方案实现适配，在2015年双十一之后做过这方面的技术文档分享，感兴趣的同学可以移步阅读《使用Flexible实现手淘H5页面的终端适配》一文。虽然Flexible解决了适配终端很多问题，但它并不是万能的，也不是最优秀的，他还是存在一些问题的，比如iframe的引用，有时候就把我们自己给埋进去了。针对其中的一些不足之处，有些同学对其进行过相关的改造，在网上搜索能找到相关的方案。</li>
              </ul>
              <p>
                那么时代在变化，前端技术在不断的变化，试问：Flexible还是最佳方案？Flexible还有存在的必要吗？ 最近一直在探讨这方面，这里先告诉大家Flexible已经完成了他自身的历史使命，我们可以放下Flexible，拥抱新的变化。接下来的内容，我将分享一下我最近自己探讨的新的适配方案，或许很多团队同学已经开始使用了，如果有不对之处，希望能得到大婶们的指正；如果您有更好的方案，希望能一起分享一起探讨。
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }
}