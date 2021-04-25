import React from "react";
class TestXss extends React.Component {
  state = {
    val: `<script>alert("hack")</script>`,
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      val: value,
    });
  };

  handleClick = () => {
    this.setState({
      val: 'eval(alert("hack"))',
    });
  };

  render() {
    // 没有其作用，看起来应该是chrome浏览器自己就针对xss做了优化
    const { val } = this.state;
    return (
      <div>
        <input
          value={val}
          onChange={this.handleChange}
          style={{ width: "300px" }}
        />
        <p>
          <button onClick={this.handleClick}>测试</button>
        </p>
      </div>
    );
  }
}
export default TestXss;
