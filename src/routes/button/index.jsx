import React from "react";
class TestButton extends React.Component {
  state = {};

  componentDidMount() {
    const button = document.getElementById("test");
    button.addEventListener(
      "click",
      () => {
        // this指向了window对象
        this.classList.toggle("on");
      },
      false
    );
  }

  render() {
    return (
      <div className="btn-box">
        <button id="test">Click me</button>
      </div>
    );
  }
}
export default TestButton;
