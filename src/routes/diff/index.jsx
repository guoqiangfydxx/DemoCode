import React from "react";
import { Button, Divider } from "antd";
class TestDiff extends React.Component {
  state = {
    list: [
      {
        name: "tom",
        age: 13,
      },
      {
        name: "jerry",
        age: 23,
      },
      {
        name: "john",
        age: 27,
      },
      {
        name: "gary",
        age: 24,
      },
      {
        name: "louise",
        age: 25,
      },
    ],
    val: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      val: value,
    });
  };

  changeList = () => {
    const { list } = this.state;
    this.setState({
      list: [
        ...list,
        {
          name: "clover",
          age: 26,
        },
      ],
    });
  };

  render() {
    const { list, val } = this.state;
    return (
      <div className="diff-container">
        <ul>
          {list.map((item, index) => {
            const { name, age } = item;
            return <li key={index}>{`姓名：${name}, 年龄：${age}`}</li>;
          })}
        </ul>
        <p>------------------------------------------</p>
        <input value={val} onChange={this.handleChange} />
        <Divider>------------------</Divider>
        <Button onClick={this.changeList}>改变列表</Button>
      </div>
    );
  }
}

export default TestDiff;
