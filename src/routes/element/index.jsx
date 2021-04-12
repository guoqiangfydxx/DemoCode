import React from "react";
import "./index.less";
class TestFlex extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="box-container-flex">
          <div className="box-item">1</div>
          <div className="box-item">2</div>
          <div className="box-item">3</div>
          <div className="box-item">4</div>
          <div className="box-item">5</div>
          <div className="box-item">6</div>
          <div className="box-item">7</div>
          <div className="box-item">8</div>
          <div className="box-item">9</div>
          <div className="box-item">10</div>
          <div className="box-item">11</div>
          <div className="box-item">12</div>
          <div className="box-item">13</div>
          <div className="box-item">14</div>
          <div className="box-item">15</div>
          <div className="box-item">16</div>
          <div className="box-item">17</div>
          <div className="box-item">18</div>
          <div className="box-item">19</div>
          <div className="box-item">20</div>
          <div className="box-item">21</div>
          <div className="box-item">22</div>
          <div className="box-item">23</div>
          <div className="box-item">24</div>
          <div className="box-item">25</div>
          <div className="box-item">26</div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <strong>
            rem,px,em-------------------------------------------------------------------------------------
          </strong>
        </div>
        {/* // 这里说明了em的继承效果 */}
        <div className="div2">
          <div className="div1">
            原标题:翟玉龙任云南德宏州委常委、瑞丽市委书记
            据掌上德宏消息,4月8日,中共瑞丽市委召开全市领导干部大会,宣布调整市委主要领导的决定。
            德宏州委常.
          </div>
        </div>

        {/* 这里使用了rem */}
        <div className="div3">df
          <div className="div4">
            原标题:中国成功发射试验六号03星,实现太原基地2021年开门红
            中新社北京4月9日电 (郭超凯sdfsdfsdfsdfsdfsdfsdfsd
            郑莹莹)北京时间4月9日7时1分,中国在太原卫星发射中心用长征四号乙运载火箭,成功将
          </div>
        </div>
      </div>
    );
  }
}
export default TestFlex;
