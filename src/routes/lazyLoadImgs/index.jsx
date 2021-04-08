import React from 'react'
import loading from './loading.gif'
import jpeg1 from './1.jpeg'
import jpeg2 from './2.jpeg'
import jpeg3 from './3.jpeg'
import jpeg4 from './4.jpeg'
import jpeg5 from './5.jpeg'
import jpeg6 from './6.jpeg'
import jpeg7 from './7.jpeg'
import jpeg8 from './8.jpeg'
import jpeg9 from './9.jpeg'
import jpeg10 from './10.jpeg'
import './index.less'
class LazyLoadImgs extends React.Component {
    state = {

    }

    getTop = (element) => {
        return element.offsetTop
    }

    componentDidMount() {
        const imgs = document.querySelectorAll('img')
        window.addEventListener('scroll', () => {
            this.LazyLoad(imgs)
        }, false)
        this.LazyLoad(imgs)
    }

    LazyLoad = imgs => {
        // 获取页面的可视区域告诉
        const s = window.innerHeight;
        // 获取页面的滚动高度
        const h = document.documentElement.scrollTop || document.body.scrollTop
        for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i]
            console.log('top', i, this.getTop(img))
            // 如果图片距离顶部的距离小于可视区域加上滚动高度的话，那么就需要加载该图片
            if ((s + h) >= this.getTop(img)) {
                (function(i) {
                    // 创建一个临时图片，这个图片在内存中不会显示到页面上，实现隐形加载
                    setTimeout(() => {
                        // var temp = new Image();
						// temp.src = imgs[i].getAttribute('data-src');//只会请求一次
						// // onload判断图片加载完毕，真是图片加载完毕，再赋值给dom节点
						// temp.onload = function(){
						// 	// 获取自定义属性data-src，用真图片替换假图片
						// 	imgs[i].src = imgs[i].getAttribute('data-src')
						// }
                        // 其他没有必要创建一个临时图片，已经有了实际的图片地址直接赋值到src上面更加方便
                        imgs[i].src = imgs[i].getAttribute('data-src')
                    }, 2000)
                })(i)
            }
        }
    }

    render() {
        return (
            <div className='img-list'>
                <img className='lazy' src={loading} data-src={jpeg1} />
                <img className='lazy' src={loading} data-src={jpeg2} />
                <img className='lazy' src={loading} data-src={jpeg3} />
                <img className='lazy' src={loading} data-src={jpeg4} />
                <img className='lazy' src={loading} data-src={jpeg5} />
                <img className='lazy' src={loading} data-src={jpeg6} />
                <img className='lazy' src={loading} data-src={jpeg7} />
                <img className='lazy' src={loading} data-src={jpeg8} />
                <img className='lazy' src={loading} data-src={jpeg9} />
                <img className='lazy' src={loading} data-src={jpeg10}/>
            </div>
        )
    }
}
export default LazyLoadImgs