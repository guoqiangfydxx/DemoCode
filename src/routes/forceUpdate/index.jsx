import React from "react";
import { Button } from "antd";
export default class TestForceUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  handleClick = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  };

  test = () => {
    this.forceUpdate();
  };

  render() {
    console.log("sdfsdf");
    console.table(this.state);
    return (
      <div>
        test forceUpdate
        <p>{this.state.count}</p>
        <Button onClick={this.handleClick}>Click me</Button>
        <Button onClick={this.test}>update</Button>
      </div>
    );
  }
}
