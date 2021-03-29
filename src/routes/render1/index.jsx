import React from "react";
import { Button } from "antd";
import FunctionParent from "./parent";

class Child extends React.PureComponent {
  state = {};

  render() {
    console.log("child render");
    const { isShowBtn } = this.props;
    return (
      <div>
        <p>子组件</p>
        {isShowBtn && <Button>click me</Button>}
      </div>
    );
  }
}

class Parent extends React.Component {
  state = {
    person: {
      name: "tom",
      age: 25,
    },
    isShowBtn: false,
    refresh: false,
  };

  handleClick = () => {
    this.setState({
      refresh: !this.state.refresh,
      isShowBtn: !this.state.isShowBtn,
    });
  };

  render() {
    // 正常情况下父组件重新渲染的话，就会引起子组件的重新渲染，即使父组件传递给子组件的props没有发生任何的变化，这里使用PureComponent就可以做到这一点，针对非必要的render进行自动的过滤
    const { person, isShowBtn } = this.state;
    console.log("this.state", this.state);
    return (
      <div>
        <p>父组件</p>
        <Button onClick={this.handleClick}>parent Click</Button>
        <Child isShowBtn={isShowBtn} person={person} />
        <div>
          函数组件-------------------------------------------------------------------------------------
        </div>
        <FunctionParent />
      </div>
    );
  }
}
export default Parent;
