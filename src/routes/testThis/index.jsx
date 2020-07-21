import React from "react";
import { Button } from "antd";
import { test } from "../../utils";
class TestThis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    test();
  }

  // 由于使用了ES6 class语法所以生命的函数不会自动绑定this到组件实例上面去，结果在handleClick中直接使用this就会报错
  // 解决方法一： 在constrcutor函数中显示的使用.bind(this)来绑定this到组件实例
  // 解决方法二：使用箭头函数这样的话该函数声明的时候就自动绑定this到当前运行环境组件实例
  // handleClick() {
  //   console.log('this', this)
  //   this.setState((count) => count + 1);
  // }
  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>click Me</Button>
        <span>have clicked {count} times</span>
        <div id="testId"></div>
      </div>
    );
  }
}
export default TestThis;
