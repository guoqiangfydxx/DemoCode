import React from "react";
import { Button } from "antd";
import FunctionParent from "./parent";
import StateComponent from "./state2";
import UseMemoComponent from "./useMemo";
import HookComponent from "./hooks";
import List from './list'

class Child extends React.PureComponent {
  state = {};

  // 使用shouldComponentUpdate可以用来解决父组件传递给子组件一个大的对象，但是子组件仅仅使用了其中某些属性，而且剩下的属性改变的时候也会导致整个对象变化，从而导致子组件会重新渲染，所以shouldComponentUpdate可以确定子组件渲染的范围，只有特定的props改变之后才会触发渲染操作
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.person.age !== this.props.person.age ||
      nextProps.person.name !== this.props.person.name
    ) {
      return true;
    }
    return false;
  }

  render() {
    console.log("child render", person);
    const { isShowBtn, person } = this.props;
    const { name, age } = person;
    return (
      <div>
        <p>子组件</p>
        <p>
          年龄是: {age}, 姓名为:{name}
        </p>
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
      height: "152",
      scroll: "test scroll",
      company: "ehi",
      birthday: "2020-01-01",
    },
    isShowBtn: false,
    refresh: false,
  };

  handleClick = () => {
    const { person } = this.state;
    this.setState({
      person: {
        ...person,
        name: "gerry",
        age: 27,
      },
    });
  };

  handleExtraClick = () => {
    const { person } = this.state;
    this.setState({
      person: {
        ...person,
        height: "170",
      },
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
        <Button onClick={this.handleExtraClick}>extra click</Button>
        <Child isShowBtn={isShowBtn} person={person} />
        <div>
          函数组件-------------------------------------------------------------------------------------
        </div>
        <FunctionParent />
        <p>
          状态下放------------------------------------------------------缩小影响范围
        </p>
        <StateComponent />
        <div>
          使用useMemo来返回虚拟dom----------------------------------------------
        </div>
        <UseMemoComponent />
        <div>
          hooks按需更新-------------------------------------------------------------
        </div>
        <HookComponent />
        <div>
          <p>虚拟列表------------------------------------------------------------------------------</p>
        </div>
        <List />
      </div>
    );
  }
}
export default Parent;
