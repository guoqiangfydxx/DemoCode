import React from "react";
import "./index.less";
class TestLayout extends React.Component {
  state = {};

  render() {
    return (
      <div className="layout-container">
        <div className="middle">
          <div className="main">
            王华庆：新冠疫苗的研发经历了临床前、临床一二三期然后才上市的，上市之后还要开展研究，这对疫苗的安全性都是保证。
            记者：这种超越正常规律研发出来的疫苗，安全性能达到百分之百吗？
            王华庆：任何一个疫苗都有它的风险，我们现在打这个疫苗有不良反应或者严重过敏性反应的，是百万分之一的数据，但相比新冠肺炎的病亡率2%的数据，我们就可以看出新冠给我们带来的危害是非常大的，疫苗我们还可以有一些措施去把风险降到最低。
          </div>
        </div>
        <div className="left">
          近期，游客在三亚吃海胆蒸蛋没海胆事件引发热议。4月12日，海南省长冯飞回应称，将对三亚海胆事件深入调查，及时回应社会关切
        </div>
        <div className="right">
          在国内还有人对疫苗持观望态度，纠结有没有必要打、质疑能不能打的时候，全球至少有70个国家和地区已经批准使用或同意购买中国疫苗，有不少国外领导人早早就接种了中国疫苗。但由于国内疫情控制有力，一些人仍在观望，并期望有更好的疫苗出现。
          记者：大家会觉得既然将来可能会做得更好，目前的形势也没有那么迫切，那我能不能往后拖一拖再打这个疫苗，这样可能对我个人会更好？
        </div>
      </div>
    );
  }
}
export default TestLayout;
