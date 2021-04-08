/**
 * @description 如何使得一个子元素在父元素中水平垂直居中
 */
import React from "react";
import "./index.less";
// 1. 第一种方法使用flex布局
// 2. 子元素现对于父元素绝对定位，然后设置top,left,bottom,right都为0，设置margin：auto
// 3. 绝对定位+transform，但是有兼容性问题，支持到IE9+的浏览器
// 4. flex+margin: auto的组合
// 5. 绝对定位并且margin值减去自己宽高的一半，缺点就是必须知道子元素的宽高
// 6. 将元素转换成表格，然后利用表格的样式来居中
// 7. 使用grid布局
class TestCenterHorizontaly extends React.PureComponent {
  state = {};

  render() {
    return (
      <div class="box-container">
        <div class="box">green</div>
        <div className='father'>
        2020年4月8日0时，离汉通道管控措施正式解除
        </div>
      </div>
    );
  }
}
export default TestCenterHorizontaly;
